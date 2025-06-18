import prisma from "@/prisma/config";

async function clearSessionData() {
  console.log("Eleminando datos de session ...");
  await prisma.authActionLog.deleteMany();
  await prisma.twoFactorConfirmation.deleteMany();
  await prisma.twoFactorTokenEmail.deleteMany();
  await prisma.resetPasswordTokenEmail.deleteMany();
  await prisma.verificationTokenEmail.deleteMany();
  console.log("Datos eliminados");
}

clearSessionData();
