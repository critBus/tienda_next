"use server";

import prisma from "@/prisma/config";
import PrismaRepository from "@/prisma/PrismaRepository";
import { generateTwoFactorToken } from "@/lib/server/auth/tokens";
import { sendTwoFactorTokenEmail } from "@/lib/shared/mail";
import { verifyTempAuthToken } from "@/lib/server/auth/2faEmail";
export const resend2faEmailCode = async () => {
  const email = await verifyTempAuthToken();

  if (!email) {
    return { error: "No hay sesión temporal" };
  }

  const existingUser = await PrismaRepository.users.byEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }
  if (!existingUser.emailVerified) {
    return { error: "The email is not validated" };
  }
  await prisma.twoFactorTokenEmail.deleteMany({
    where: {
      email: email,
    },
  });

  const twoFactorToken = await generateTwoFactorToken(email);
  await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

  return { success: true };
};
