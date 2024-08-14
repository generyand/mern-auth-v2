import { MailtrapClient } from "mailtrap";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

const TOKEN = process.env.MAILTRAP_TOKEN;
const SENDER_EMAIL = "mailtrap@demomailtrap.com";
// const RECIPIENT_EMAIL = "kiedajhinn@gmail.com"; // This commented out for now because it should be dynamic

export const mailtrapClient = new MailtrapClient({ token: TOKEN });

export const sender = { name: "Kieda Jhinn", email: SENDER_EMAIL };

/* Commented out for now because this should be handled in the controller */
// client
//   .send({
//     from: sender,
//     to: [{ email: RECIPIENT_EMAIL }],
//     subject: "Test 2",
//     text: "Wassup yowwwww! This a test from Mailtrap.",
//   })
//   .then(console.log)
//   .catch(console.error);
