// lib/auth.ts
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_2FA_SECRET);
const cookieName = "2fa-token";

// Función para crear el token temporal
export async function createTempAuthToken(email: string) {
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10m") // Expira en 10 minutos
    .sign(secret);

  const adminCookies = await cookies();
  adminCookies.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/", // O una ruta más específica
    maxAge: 60 * 10, // 10 minutos
  });
}

// Función para verificar el token y obtener el email
export async function verifyTempAuthToken(): Promise<string | null> {
  const adminCookies = await cookies();
  const cookie = adminCookies.get(cookieName);
  if (!cookie) return null;

  try {
    const { payload } = await jwtVerify(cookie.value, secret);
    return payload.email as string;
  } catch {
    // Token inválido o expirado
    return null;
  }
}

// Función para limpiar la cookie
export async function clearTempAuthToken() {
  const adminCookies = await cookies();
  adminCookies.delete(cookieName);
}
