import prisma from "@/prisma/config";

export const byToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationTokenEmail.findUnique({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch {
    return null;
  }
};
