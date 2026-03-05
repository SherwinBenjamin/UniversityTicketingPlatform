import * as dotenv from "dotenv";
dotenv.config();

import { Pool } from "pg";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import uniqid from "uniqid";

const pool = new Pool({
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	port: parseInt(String(process.env.DB_PORT)),
	ssl: { rejectUnauthorized: false },
});

async function seed() {
	const client = await pool.connect();
	try {
		console.log("Starting seed...");

		// Staff
		const adminId = uuidv4();
		const viewerId = uuidv4();
		const adminPassword = await bcrypt.hash("Admin@demo123", 10);
		const viewerPassword = await bcrypt.hash("Viewer@demo123", 10);

		await client.query(
			`
			INSERT INTO staffs (id, name, email, password, phone_number, club_name, role, is_verified, created_at)
			VALUES
				($1, 'Demo Admin', 'admin@milandemo.com', $2, '9000000001', 'Milan Core', 'admin', true, NOW()),
				($3, 'Demo Viewer', 'viewer@milandemo.com', $4, '9000000002', 'Milan Core', 'viewer', true, NOW())
			ON CONFLICT (email) DO NOTHING
		`,
			[adminId, adminPassword, viewerId, viewerPassword]
		);
		console.log("Staff seeded");

		// Events
		const events = [
			{
				id: uuidv4(),
				name: "Battle of Bands",
				event_code: "MUSIC-001",
				club_name: "Music Club",
				mode: "offline",
				event_scope: "open",
				is_group_event: false,
				max_cap: 200,
			},
			{
				id: uuidv4(),
				name: "Flash Mob",
				event_code: "DANCE-001",
				club_name: "Dance Club",
				mode: "offline",
				event_scope: "open",
				is_group_event: true,
				max_cap: 150,
			},
			{
				id: uuidv4(),
				name: "Code Clash",
				event_code: "TECH-001",
				club_name: "Tech Club",
				mode: "online",
				event_scope: "open",
				is_group_event: false,
				max_cap: 300,
			},
			{
				id: uuidv4(),
				name: "Short Film Fest",
				event_code: "FILM-001",
				club_name: "Film Society",
				mode: "offline",
				event_scope: "open",
				is_group_event: false,
				max_cap: 100,
			},
			{
				id: uuidv4(),
				name: "Quiz Mania",
				event_code: "QUIZ-001",
				club_name: "Literary Club",
				mode: "offline",
				event_scope: "open",
				is_group_event: false,
				max_cap: 250,
			},
		];

		for (const ev of events) {
			await client.query(
				`
				INSERT INTO events (id, name, event_code, club_name, mode, event_scope, is_group_event, max_cap, reg_count, is_active, created_at)
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 0, true, NOW())
				ON CONFLICT (event_code) DO NOTHING
			`,
				[
					ev.id,
					ev.name,
					ev.event_code,
					ev.club_name,
					ev.mode,
					ev.event_scope,
					ev.is_group_event,
					ev.max_cap,
				]
			);
		}
		console.log("Events seeded");

		// Users
		const userPassword = await bcrypt.hash("Student@demo123", 10);
		const users = [
			{
				id: uuidv4(),
				name: "Alice Demo",
				email: "alice@milandemo.com",
				reg_number: "RA2211003010001",
				phone_number: 9111111111,
				college_name: "SRM KTR",
				gender: "female",
			},
			{
				id: uuidv4(),
				name: "Bob Demo",
				email: "bob@milandemo.com",
				reg_number: "RA2211003010002",
				phone_number: 9111111112,
				college_name: "SRM KTR",
				gender: "male",
			},
			{
				id: uuidv4(),
				name: "Carol Demo",
				email: "carol@milandemo.com",
				reg_number: "RA2211003010003",
				phone_number: 9111111113,
				college_name: "VIT Chennai",
				gender: "female",
			},
		];

		const insertedUserIds: string[] = [];
		for (const u of users) {
			const res = await client.query(
				`
				INSERT INTO users (id, milan_id, name, email, password, phone_number, college_name, reg_number, gender, is_srm_ktr, profile_pic, ticket_type, is_ticket_issued, is_deleted, created_at)
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '', 'online', false, false, NOW())
				ON CONFLICT (email) DO NOTHING
				RETURNING id
			`,
				[
					u.id,
					uniqid("MILAN-"),
					u.name,
					u.email,
					userPassword,
					u.phone_number,
					u.college_name,
					u.reg_number,
					u.gender,
					u.college_name === "SRM KTR",
				]
			);
			if (res.rows[0]) {
				insertedUserIds.push(res.rows[0].id);
			} else {
				const existing = await client.query(
					`SELECT id FROM users WHERE email = $1`,
					[u.email]
				);
				if (existing.rows[0]) insertedUserIds.push(existing.rows[0].id);
			}
		}
		console.log("Users seeded");

		// Bookings (deterministic ids => idempotent)
		const bookingIds = [
			"d802f0d8-b3c9-4130-84b8-6654f2fa7c21",
			"f6c3188f-c56a-4532-95fe-d82a17ab426f",
			"30d07b5f-f131-4f37-b9be-5edbfa1e47ce",
		];

		for (let i = 0; i < Math.min(insertedUserIds.length, bookingIds.length); i++) {
			const userId = insertedUserIds[i];
			await client.query(
				`
				INSERT INTO bookings (id, user_id, serial_number, payment_id, ticket_id, payment_status, ticket_status, offline_ticket_issued, ticket_type, created_at)
				VALUES ($1, $2, $3, $4, $5, 'success', 'success', false, 1, NOW())
				ON CONFLICT (id) DO NOTHING
			`,
				[
					bookingIds[i],
					userId,
					`SN-DEMO-${String(i + 1).padStart(4, "0")}`,
					`PAY-DEMO-${String(i + 1).padStart(4, "0")}`,
					`TKT-DEMO-${String(i + 1).padStart(4, "0")}`,
				]
			);
		}
		console.log("Bookings seeded");

		console.log("\nSeed complete. Demo credentials:");
		console.log("  Admin:   admin@milandemo.com  /  Admin@demo123");
		console.log("  Viewer:  viewer@milandemo.com /  Viewer@demo123");
		console.log("  Student: alice@milandemo.com  /  Student@demo123");
	} catch (err) {
		console.error("Seed failed:", err);
		process.exit(1);
	} finally {
		client.release();
		await pool.end();
	}
}

seed();
