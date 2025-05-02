-- DropIndex
DROP INDEX "Currency_name_baseRate_isDefault_isBase_idx";

-- DropIndex
DROP INDEX "Price_productId_currencyId_value_isFixed_idx";

-- DropIndex
DROP INDEX "Product_categoryId_companyId_name_priceBaseCurrency_priceBa_idx";

-- DropIndex
DROP INDEX "ProductAvailability_productId_provinceId_municipalityId_tow_idx";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "purchaseCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Currency_name_isDefault_idx" ON "Currency"("name", "isDefault");

-- CreateIndex
CREATE INDEX "Currency_name_isBase_idx" ON "Currency"("name", "isBase");

-- CreateIndex
CREATE INDEX "Currency_isDefault_idx" ON "Currency"("isDefault");

-- CreateIndex
CREATE INDEX "Currency_isBase_idx" ON "Currency"("isBase");

-- CreateIndex
CREATE INDEX "Currency_symbol_idx" ON "Currency"("symbol");

-- CreateIndex
CREATE INDEX "Municipality_provinceId_idx" ON "Municipality"("provinceId");

-- CreateIndex
CREATE INDEX "Price_productId_isFixed_idx" ON "Price"("productId", "isFixed");

-- CreateIndex
CREATE INDEX "Price_productId_currencyId_value_idx" ON "Price"("productId", "currencyId", "value");

-- CreateIndex
CREATE INDEX "Price_currencyId_value_idx" ON "Price"("currencyId", "value");

-- CreateIndex
CREATE INDEX "Price_value_idx" ON "Price"("value");

-- CreateIndex
CREATE INDEX "Price_isFixed_idx" ON "Price"("isFixed");

-- CreateIndex
CREATE INDEX "Price_updatedAt_idx" ON "Price"("updatedAt");

-- CreateIndex
CREATE INDEX "Product_name_idx" ON "Product"("name");

-- CreateIndex
CREATE INDEX "Product_priceBaseCurrency_idx" ON "Product"("priceBaseCurrency");

-- CreateIndex
CREATE INDEX "Product_priceBaseDiscount_idx" ON "Product"("priceBaseDiscount");

-- CreateIndex
CREATE INDEX "Product_stock_idx" ON "Product"("stock");

-- CreateIndex
CREATE INDEX "Product_ignoreStock_idx" ON "Product"("ignoreStock");

-- CreateIndex
CREATE INDEX "Product_published_idx" ON "Product"("published");

-- CreateIndex
CREATE INDEX "Product_discountPercentage_idx" ON "Product"("discountPercentage");

-- CreateIndex
CREATE INDEX "Product_freeShipping_idx" ON "Product"("freeShipping");

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");

-- CreateIndex
CREATE INDEX "Product_companyId_idx" ON "Product"("companyId");

-- CreateIndex
CREATE INDEX "Product_createdAt_idx" ON "Product"("createdAt");

-- CreateIndex
CREATE INDEX "Product_brand_idx" ON "Product"("brand");

-- CreateIndex
CREATE INDEX "ProductAvailability_productId_idx" ON "ProductAvailability"("productId");

-- CreateIndex
CREATE INDEX "ProductAvailability_provinceId_municipalityId_townId_idx" ON "ProductAvailability"("provinceId", "municipalityId", "townId");

-- CreateIndex
CREATE INDEX "ProductAvailability_municipalityId_townId_idx" ON "ProductAvailability"("municipalityId", "townId");

-- CreateIndex
CREATE INDEX "ProductAvailability_townId_idx" ON "ProductAvailability"("townId");

-- CreateIndex
CREATE INDEX "ProductAvailability_createdAt_idx" ON "ProductAvailability"("createdAt");

-- CreateIndex
CREATE INDEX "ProductImage_productId_cover_idx" ON "ProductImage"("productId", "cover");

-- CreateIndex
CREATE INDEX "ProductImage_cover_idx" ON "ProductImage"("cover");

-- CreateIndex
CREATE INDEX "Town_municipalityId_idx" ON "Town"("municipalityId");
