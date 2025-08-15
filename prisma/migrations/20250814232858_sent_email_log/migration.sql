-- CreateTable
CREATE TABLE "SentEmailLog" (
    "id" SERIAL NOT NULL,
    "to" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SentEmailLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SentEmailLog_to_sentAt_idx" ON "SentEmailLog"("to", "sentAt");
