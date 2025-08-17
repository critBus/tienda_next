import Credentials from "next-auth/providers/credentials";

import { VerificationCodeSchema } from "@/schemas/auth";
import PrismaRepository from "@/prisma/PrismaRepository";
import {
  clearTempAuthToken,
  verifyTempAuthToken,
} from "@/lib/server/auth/2faEmail";
import prisma from "@/prisma/config";

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
    if (!credentials?.code) {
      throw new Auth2faCodeEmailError(t("invalidCode"));
    }

    // 1. Obtener el email de confianza desde la cookie firmada
    const email = await verifyTempAuthToken();

    if (!email) {
      throw new Auth2faCodeEmailError(t("noTempSession"), {
        redirectToMessage: true,
      });
    }

    const validatedFields = VerificationCodeSchema.safeParse(credentials);
    if (!validatedFields.success) {
      throw new Auth2faCodeEmailError(t("invalidCode"));
    }
    const { code } = validatedFields.data;

    // 2. Buscar el token en la base de datos
    const twoFactorToken =
      await PrismaRepository.twoFactorTokenEmail.byEmail(email);

    if (!twoFactorToken) {
      throw new Auth2faCodeEmailError(t("codeExpired"), {
        redirectToMessage: true,
      });
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
      throw new Auth2faCodeEmailError(t("codeExpired"), {
        redirectToMessage: true,
      });
    }

    // 5. Comprobar si el código es incorrecto
    if (twoFactorToken.token !== code) {
      await prisma.twoFactorTokenEmail.update({
        where: { id: twoFactorToken.id },
        data: { attempts: { increment: 1 } },
      });
      const remainingAttempts =
        MAX_ATTEMPTS_2FA_EMAIL_CODE - (twoFactorToken.attempts + 1);
      throw new Auth2faCodeEmailError(
        t("auth2faemailcodeError", { remainingAttempts })
      );
    }

    // --- ¡ÉXITO! ---
    await clearTempAuthToken();
    await prisma.twoFactorTokenEmail.delete({
      where: { id: twoFactorToken.id },
    });

    const user = await PrismaRepository.users.byEmail(email);
    if (!user) {
      throw new Auth2faCodeEmailError(t("emailDoesNotExist"), {
        redirectToMessage: true,
      });
    }

    return user;
  },
});
