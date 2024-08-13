import MailtrapClient from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;
const test = process.env.PORT;

console.log(test, TOKEN, ENDPOINT);

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Kieda Jhinn",
};
const recipients = [
  {
    email: "kiedajhinn@gmail.com",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
