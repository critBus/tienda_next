"use server";

import prisma from "@/prisma/config";
import * as z from "zod";

import { RegisterSchema } from "@/schemas/auth";
import { generateVerificationToken } from "@/lib/server/auth/tokens";
import { sendVerificationEmail } from "@/lib/shared/mail";
import { createHashedPassword } from "@/lib/server/auth/createHashedPassword";
import { getTranslations } from "next-intl/server";

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const t = await getTranslations("AuthServerActions");
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: t("invalidFields") };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await createHashedPassword({ password });
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return { error: t("EmailAlreadyInUse") };
  }
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: t("confirmationEmailSent") };
};
