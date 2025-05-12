-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "recommendationScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- CreateIndex
CREATE INDEX "Product_recommendationScore_idx" ON "Product"("recommendationScore");
