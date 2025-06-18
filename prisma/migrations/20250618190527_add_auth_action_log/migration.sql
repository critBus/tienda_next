-- CreateEnum
CREATE TYPE "TypeAuthAction" AS ENUM ('FACTOR_2FA_SEND', 'FACTOR_2FA_RESEND', 'PASSWORD_RESET_REQUEST');

-- CreateTable
CREATE TABLE "AuthActionLog" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "action" "TypeAuthAction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthActionLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AuthActionLog_email_action_createdAt_idx" ON "AuthActionLog"("email", "action", "createdAt");
