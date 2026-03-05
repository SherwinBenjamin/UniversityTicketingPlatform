# University Event Registration & Ticketing Platform

A full-stack event registration and ticketing system built for **Milan 2024**, the annual cultural fest of SRM Institute of Science and Technology, Kattankulathur. The platform handled real-time event registrations, ticket issuance, and admin management for thousands of students across multiple event categories.

## Live Demo

| Service | URL |
|---|---|
| Student Portal | _coming soon_ |
| Admin Dashboard | _coming soon_ |
| API | _coming soon_ |

> **Demo Note:** No real financial transactions. Payment and ticket states in this demo are simulated via pre-seeded data only.

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin Staff | `admin@milandemo.com` | `Admin@demo123` |
| Viewer Staff | `viewer@milandemo.com` | `Viewer@demo123` |
| Student | `alice@milandemo.com` | `Student@demo123` |

### 3-Step Recruiter Test

1. **Student flow** — Open the Student Portal → Register a new account (or log in as `alice@milandemo.com`) → Browse the seeded events.
2. **Admin flow** — Open the Admin Dashboard → Log in as `admin@milandemo.com` → View bookings, live ticket count, and event management.
3. **Verify protection** — Try calling `DELETE /api/events/MUSIC-001` without a valid session cookie — expect `401 Unauthorized`.

## Features

**Student Portal**
- Email + password registration and JWT-based authentication
- Browse and register for 15+ event categories (Dance, Music, Gaming, Fashion, etc.)
- Real-time ticket issuance and booking management
- Responsive UI with Framer Motion animations

**Admin Dashboard**
- Staff registration and role-based verification
- Create, activate, and manage events with capacity controls
- View bookings by user email, handle user deletion
- Live ticket count and registration analytics
- Offline ticket issuance tracking

**Backend API**
- RESTful API with Express + TypeScript
- PostgreSQL with connection pooling via `pg`
- JWT authentication with cookie sessions
- AWS SQS integration for async booking and email queues
- Discord webhook logging for errors and info events
- Helmet + CORS security middleware

## Tech Stack

| Layer | Technology |
|---|---|
| Student Frontend | React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, TanStack Query |
| Admin Frontend | React 18, TypeScript, Vite, Tailwind CSS, Chakra UI, TanStack Query |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL (AWS RDS / Vercel Postgres) |
| Auth | JWT, Email/Password, Cookie Sessions |
| Cloud | AWS SQS, AWS Elastic Beanstalk |
| Logging | Discord Webhooks, Pino |
| DevOps | Docker, Docker Compose, Nginx |

## Repository Structure

```
university-ticketing-platform/
├── backend/               # Express + TypeScript REST API
│   ├── src/
│   │   ├── users/         # Auth + bookings
│   │   ├── events/        # Event management
│   │   ├── staff/         # Admin staff endpoints
│   │   ├── teams/         # Team management
│   │   └── utils/         # JWT, logger, error handler
│   ├── migrations/        # Sequelize DB migrations
│   └── config/            # DB config (reads from env)
├── frontend/              # Student-facing React app
│   └── src/
│       ├── pages/         # Home, Events, Dashboard
│       ├── components/    # UI components (Aceternity UI)
│       └── features/      # Auth, event hooks
├── admin/                 # Admin dashboard React app
│   └── src/
│       ├── pages/         # Events, Staffs, Users
│       ├── features/      # Auth, booking, ticket hooks
│       └── services/      # API service layer
├── docker-compose.yml     # One-command local setup
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 16+ (or use Docker)
- npm 9+

### 1. Clone the repo

```bash
git clone https://github.com/SherwinBenjamin/university-ticketing-platform.git
cd university-ticketing-platform
```

### 2. Set up environment variables

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp admin/.env.example admin/.env
```

Fill in your values in each `.env` file. See [backend/.env.example](backend/.env.example) for all required variables.

### 3. Install dependencies

```bash
npm run install:all
```

### 4. Run database migrations

```bash
cd backend && npx sequelize-cli db:migrate
```

### 5. Start all services

```bash
npm run dev
```

This starts:
- Backend API on `http://localhost:5000`
- Student portal on `http://localhost:5173`
- Admin dashboard on `http://localhost:5174`

### Docker (alternative)

```bash
cp backend/.env.example .env
# fill in .env values
docker-compose up --build
```

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register student |
| POST | `/api/users/login` | Login student |
| GET | `/api/events` | List all events |
| POST | `/api/events/register` | Register for event |
| GET | `/api/bookings` | Get user bookings |
| POST | `/api/staff/login` | Admin login |
| GET | `/api/staff` | List all staff |
| POST | `/api/staff/verify` | Verify staff member |

## Database Schema

Core tables managed via Sequelize migrations:

- `users` — student accounts
- `staffs` — admin accounts with verification status
- `events` — event catalogue with capacity
- `bookings` — user-to-event registrations
- `event_users` — junction table for event participation
- `teams` / `team_members` — team event management
- `emails` — email queue tracking

## Security

- Credentials are managed via environment variables — no secrets in source code
- HTTP security headers via Helmet
- CORS restricted to known origins
- Cookie sessions with expiry
- Input validation via express-validator

## Author

**Sherwin Benjamin** — Full Stack Developer
SRM Institute of Science and Technology, Kattankulathur — B.Tech CSE 2024
[GitHub](https://github.com/SherwinBenjamin)
