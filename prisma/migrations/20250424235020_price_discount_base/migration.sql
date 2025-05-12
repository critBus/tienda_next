/*
  Warnings:

  - You are about to drop the column `priceDiscount` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "priceDiscount",
ADD COLUMN     "priceBaseDiscount" DOUBLE PRECISION;
