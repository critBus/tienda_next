export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
export const MAX_ATTEMPTS_2FA_EMAIL_CODE = Number(
  process.env.MAX_ATTEMPTS_2FA_EMAIL_CODE
);

export const GMAIL_USER = process.env.GMAIL_USER;
export const GMAIL_PASS = process.env.GMAIL_PASS;
export const SENT_EMAIL = process.env.SENT_EMAIL == "true";
export const DOMAIN_URL = process.env.DOMAIN_URL;
