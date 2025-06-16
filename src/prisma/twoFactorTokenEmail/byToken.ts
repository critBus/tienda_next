import prisma from "@/prisma/config";

export const byToken = async (token: string) => {
  try {
    const verificationToken = await prisma.twoFactorTokenEmail.findUnique({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch {
    return null;
  }
};
