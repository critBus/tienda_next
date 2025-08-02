"use server";
import { generatePasswordResetToken } from "@/lib/server/auth/tokens";
import { sendPasswordResetEmail } from "@/lib/shared/mail";

import PrismaRepository from "@/prisma/PrismaRepository";

import { ResetSchema } from "@/schemas/auth";

import * as z from "zod";

export const sendResetPassword = async (
  values: z.infer<typeof ResetSchema>
) => {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invaid email" };
  }
  const { email } = validatedFields.data;
  //   console.log(email);
  const existingUser = await PrismaRepository.users.byEmail(email);
  //   console.log(existingUser);

  if (!existingUser) {
    return { error: "Email not found" };
  }
  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "Reset email sent" };
};
