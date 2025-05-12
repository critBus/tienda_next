-- CreateIndex
CREATE INDEX "Product_purchaseCount_idx" ON "Product"("purchaseCount");

-- CreateIndex
CREATE INDEX "Product_viewCount_idx" ON "Product"("viewCount");

-- CreateIndex
CREATE INDEX "Product_published_purchaseCount_idx" ON "Product"("published", "purchaseCount");

-- CreateIndex
CREATE INDEX "Product_published_recommendationScore_idx" ON "Product"("published", "recommendationScore");

-- CreateIndex
CREATE INDEX "Product_published_createdAt_idx" ON "Product"("published", "createdAt");
