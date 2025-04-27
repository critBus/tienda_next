-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ignoreStock" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
