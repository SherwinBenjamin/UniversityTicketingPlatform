import DiscordLogger from "node-discord-logger";
import os from "os";

export const disc_error_logger = new DiscordLogger({
	hook: process.env.DISCORD_ERROR_WEBHOOK_URL ?? "",
	icon: "https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png", // optional, will be included as an icon in the footer
	serviceName: "Mini-Milan-2024 Error Logger 🔥", // optional, will be included as text in the footer
	defaultMeta: {
		// optional, will be added to all the messages
		"Process ID": process.pid,
		Host: os.hostname(), // import os from 'os';
	},
	errorHandler: (err) => {
		// // optional, if you don't want this library to log to console
		// console.error("error from discord", err);
	},
});

export const disc_info_logger = new DiscordLogger({
	hook: process.env.DISCORD_INFO_WEBHOOK_URL ?? "",
	icon: "https://toppng.com/uploads/preview/check-mark-green-round-vector-icon-11642046702ef87hfwocm.png", // optional, will be included as an icon in the footer
	serviceName: "Mini-Milan-2024 Info Logger 🔥", // optional, will be included as text in the footer
	defaultMeta: {
		// optional, will be added to all the messages
		"Process ID": process.pid,
		Host: os.hostname(), // import os from 'os';
	},
	errorHandler: (err) => {
		// // optional, if you don't want this library to log to console
		// console.error("error from discord", err);
	},
});
