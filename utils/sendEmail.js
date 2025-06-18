import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendResetEmail(to, link) {
  await transporter.sendMail({
    from: `"CodesForTomorrow" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Reset Your Password",
    html: `<p>Click here to reset your password: <a href="${link}">${link}</a></p>`,
  });
}
