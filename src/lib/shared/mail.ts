import { DOMAIN_URL, GMAIL_PASS, GMAIL_USER, SENT_EMAIL } from "@/config";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

const sendEmailFree = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  console.log({
    to,
    subject,
    html,
  });
  if (SENT_EMAIL) {
    return await transporter.sendMail({
      from: `"Example Team" <${GMAIL_USER}>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      html: html, // html body
    });
  }
};
const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  console.log({
    to,
    subject,
    html,
  });
  return await sendEmailFree({
    to,
    subject,
    html,
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  return await sendEmail({
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA Code ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${DOMAIN_URL}/auth/new-password?token=${token}`;
  return await sendEmail({
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${confirmLink}">here</a> to reset password</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${DOMAIN_URL}/auth/new-verification?token=${token}`;
  return await sendEmail({
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email</p>`,
  });
};
