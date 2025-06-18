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
import { getTranslations } from "next-intl/server";

// Define el número máximo de intentos permitidos
export const custom2FAEmailCodeProvider = Credentials({
  id: "2fa",
  name: "Two-Factor Authentication",
  credentials: {
    code: { label: "Código de Verificación", type: "text" },
  },
  async authorize(credentials) {
    const t = await getTranslations("AuthServerActions");
    // 1. Obtener el email de confianza desde la cookie firmada
    const email = await verifyTempAuthToken();
    if (!credentials?.code || !email) {
      throw new Auth2faCodeEmailError(t("noTempSession"));
      return null;
    }

    const validatedFields = VerificationCodeSchema.safeParse(credentials);
    if (!validatedFields.success) {
      throw new Auth2faCodeEmailError(t("invalidCode"));
      return null;
    }
    const { code } = validatedFields.data;

    // 2. Buscar el token en la base de datos
    const twoFactorToken =
      await PrismaRepository.twoFactorTokenEmail.byEmail(email);

    if (!twoFactorToken) {
      throw new Auth2faCodeEmailError(t("codeExpired"));
    }

    // 3. Comprobar si se ha excedido el número de intentos
    if (twoFactorToken.attempts >= MAX_ATTEMPTS_2FA_EMAIL_CODE) {
      await prisma.twoFactorTokenEmail.delete({
        where: { id: twoFactorToken.id },
      });
      throw new Auth2faCodeEmailError(t("maxResendsExceeded"));
    }

    // 4. Comprobar si el token ha expirado por tiempo
    const hasExpired = new Date(twoFactorToken.expires) < new Date();
    if (hasExpired) {
      await prisma.twoFactorTokenEmail.delete({
        where: { id: twoFactorToken.id },
      });
      throw new Auth2faCodeEmailError(t("codeExpired"));
    }

    // 5. Comprobar si el código es incorrecto
    if (twoFactorToken.token !== code) {
      await prisma.twoFactorTokenEmail.update({
        where: { id: twoFactorToken.id },
        data: { attempts: { increment: 1 } },
      });
      throw new Auth2faCodeEmailError(t("invalidCode"));
    }

    // --- ¡ÉXITO! ---
    await clearTempAuthToken();
    await prisma.twoFactorTokenEmail.delete({
      where: { id: twoFactorToken.id },
    });

    const user = await PrismaRepository.users.byEmail(email);
    if (!user) {
      throw new Auth2faCodeEmailError(t("emailDoesNotExist"));
      return null;
    }

    return user;
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
