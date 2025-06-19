export const LOGIN_URL = "/auth/login";
export const LOGIN_2FA_URL = "/auth/login/twoFactorEmail";
export const LOGIN_MESSAGE = "/auth/message";
export const LOGIN_REGISTER = "/auth/register";
export const AUTH_ROUTES = [
  "/auth",
  LOGIN_URL,
  LOGIN_2FA_URL,
  LOGIN_MESSAGE,
  LOGIN_REGISTER,
];
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
export const PROTECTED_ROUTES = ["/dashboard"];
export const REDIRECT_LOGIN_SUCCESSFUL = "/dashboard"; //"/shop";
