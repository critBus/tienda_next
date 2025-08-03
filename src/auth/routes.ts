export const AUTH_URL_LOGIN = "/auth/login";
export const AUTH_URL_LOGIN_2FA = "/auth/login/twoFactorEmail";
export const AUTH_URL_LOGIN_MESSAGE = "/auth/message";
export const AUTH_URL_LOGIN_REGISTER = "/auth/register";
export const AUTH_URL_LOGIN_NEW_VERIFICATION = "/auth/new-verification";
export const AUTH_URL_NEW_PASSWORD = "/auth/reset-password/new-password";
export const AUTH_URL_SEND_EMAIL_RESET_PASSWORD =
  "/auth/reset-password/send-email";

export const AUTH_ROUTES = [
  "/auth",
  AUTH_URL_LOGIN,
  AUTH_URL_LOGIN_2FA,
  AUTH_URL_LOGIN_MESSAGE,
  AUTH_URL_LOGIN_REGISTER,
  AUTH_URL_LOGIN_NEW_VERIFICATION,
  AUTH_URL_NEW_PASSWORD,
  AUTH_URL_SEND_EMAIL_RESET_PASSWORD,
];
export const DEFAULT_LOGIN_REDIRECT = "/shop";
export const PROTECTED_ROUTES = ["/dashboard"];
export const REDIRECT_LOGIN_SUCCESSFUL = "/shop";
