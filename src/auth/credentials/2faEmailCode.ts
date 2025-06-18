import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { LoginSchema, VerificationCodeSchema } from "@/schemas/auth";
import PrismaRepository from "@/prisma/PrismaRepository";
import {
  clearTempAuthToken,
  verifyTempAuthToken,
} from "@/lib/server/auth/2faEmail";
import prisma from "@/prisma/config";
import { AuthError } from "next-auth";
import { MAX_ATTEMPTS_2FA_EMAIL_CODE } from "@/config";
import { Auth2faCodeEmailError } from "@/lib/server/errors/2faEmailError";
// Define el número máximo de intentos permitidos

export const custom2FAEmailCodeProvider = Credentials({
  id: "2fa",
  name: "Two-Factor Authentication",
  credentials: {
    code: { label: "Código de Verificación", type: "text" },
  },
  async authorize(credentials) {
    //try {
    // 1. Obtener el email de confianza desde la cookie firmada
    const email = await verifyTempAuthToken();
    if (!credentials?.code || !email) {
      throw new Auth2faCodeEmailError(
        "No hay sesión temporal o no se envió el código"
      );
      return null; // No hay sesión temporal o no se envió el código
    }

    const validatedFields = VerificationCodeSchema.safeParse(credentials);
    if (!validatedFields.success) {
      throw new Auth2faCodeEmailError("El código no tiene el formato correcto");
      return null; // El código no tiene el formato correcto
    }
    const { code } = validatedFields.data;

    // 2. Buscar el token en la base de datos
    const twoFactorToken =
      await PrismaRepository.twoFactorTokenEmail.byEmail(email);

    if (!twoFactorToken) {
      // El token no existe, posiblemente ya se usó o nunca se creó
      throw new Auth2faCodeEmailError(
        "El código ha expirado o no es válido. Por favor, solicita uno nuevo."
      );
    }

    // 3. Comprobar si se ha excedido el número de intentos
    if (twoFactorToken.attempts >= MAX_ATTEMPTS_2FA_EMAIL_CODE) {
      // Bloqueamos el token eliminándolo
      await prisma.twoFactorTokenEmail.delete({
        where: { id: twoFactorToken.id },
      });
      throw new Auth2faCodeEmailError(
        "Has excedido el número de intentos. Por favor, solicita un nuevo código."
      );
    }

    // 4. Comprobar si el token ha expirado por tiempo
    const hasExpired = new Date(twoFactorToken.expires) < new Date();
    if (hasExpired) {
      // El token ha expirado, lo eliminamos
      await prisma.twoFactorTokenEmail.delete({
        where: { id: twoFactorToken.id },
      });
      throw new Auth2faCodeEmailError(
        "El código ha expirado. Por favor, solicita uno nuevo."
      );
    }

    // 5. Comprobar si el código es incorrecto
    if (twoFactorToken.token !== code) {
      // El código es incorrecto, incrementamos el contador de intentos
      await prisma.twoFactorTokenEmail.update({
        where: { id: twoFactorToken.id },
        data: { attempts: { increment: 1 } },
      });
      console.log(
        `Intento fallido para ${email}. Intento #${twoFactorToken.attempts + 1}`
      );
      throw new Auth2faCodeEmailError(
        `Intento fallido para ${email}. Intento #${twoFactorToken.attempts + 1}`
      );
      //return null; // Devuelve null para que Next-Auth muestre "Invalid credentials"
    }

    // --- ¡ÉXITO! ---
    // 6. Si el código es correcto, procedemos con el login

    // Limpiamos la cookie temporal
    await clearTempAuthToken();

    // Eliminamos el token de 2FA ya que fue usado con éxito
    await prisma.twoFactorTokenEmail.delete({
      where: { id: twoFactorToken.id },
    });

    // Buscamos al usuario para devolverlo a Next-Auth y crear la sesión
    const user = await PrismaRepository.users.byEmail(email);
    if (!user) {
      throw new Auth2faCodeEmailError("No se encuentra este usuario");
      return null; // Esto no debería pasar si el flujo es correcto
    }

    // Devolvemos el usuario para que Next-Auth cree la sesión
    return user;
    // } catch (error) {
    //   console.log(error);
    //   if (error instanceof AuthError) {
    //     console.log("[AuthError] " + error.message);
    //     throw error;
    //   } else {
    //     console.log("Error desconocido");
    //     throw error;
    //   }

    //   return null;
    // }
  },
});
// export const custom2FAEmailCodeProvider = Credentials({
//   id: "2fa", // Un ID único para este flujo
//   name: "Two-Factor Authentication",
//   credentials: {
//     // Solo pedimos el código en el formulario
//     code: { label: "Código de Verificación", type: "text" },
//   },
//   async authorize(credentials) {
//     // 1. Obtener el email de confianza desde la cookie firmada
//     const email = await verifyTempAuthToken();
//     await clearTempAuthToken();
//     if (!credentials?.code || !email) {
//       // Si no hay código o la cookie/token expiró/es inválido
//       return null;
//     }

//     try {
//       const validatedFields = VerificationCodeSchema.safeParse(credentials);
//       if (validatedFields.success) {
//         const { code } = validatedFields.data;

//         const twoFactorToken =
//           await PrismaRepository.twoFactorTokenEmail.byEmail(email);
//         if (!twoFactorToken) {
//           console.log({ error: "Invalid token" });
//           return null;
//         }
//         if (twoFactorToken.token !== code) {
//           console.log({ error: "Invalid code" });
//           return null;
//         }
//         const hasExpired = new Date(twoFactorToken.expires) < new Date();
//         if (hasExpired) {
//           console.log({ error: "Code expired" });
//           return null;
//         }

//         if (!twoFactorToken.used) {
//           await prisma.twoFactorTokenEmail.delete({
//             where: {
//               id: twoFactorToken.id,
//             },
//           });
//           console.log({ error: "Token Used" });
//           return null;
//         }
//         await prisma.twoFactorTokenEmail.delete({
//           where: {
//             id: twoFactorToken.id,
//           },
//         });

//         const user = await PrismaRepository.users.byEmail(email);
//         if (!user || !user.password) {
//           return null;
//         }
//         return user;
//       }
//     } catch (error) {
//       console.log("error en credentials");
//       console.log(error);
//     }

//     // Si el código es incorrecto, devolver null para que Next-Auth gestione el error.
//     return null;
//   },
// });
