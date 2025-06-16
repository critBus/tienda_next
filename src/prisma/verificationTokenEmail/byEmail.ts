import prisma from "@/prisma/config";
export const byEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationTokenEmail.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch {
    return null;
  }
};
