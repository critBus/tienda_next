/*
  Warnings:

  - Added the required column `from` to the `SentEmailLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SentEmailLog" ADD COLUMN     "from" TEXT NOT NULL;
