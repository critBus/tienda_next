-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Municipality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "provinceId" INTEGER NOT NULL,

    CONSTRAINT "Municipality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Town" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "municipalityId" INTEGER NOT NULL,

    CONSTRAINT "Town_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductAvailability" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "provinceId" INTEGER,
    "municipalityId" INTEGER,
    "townId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Province_name_key" ON "Province"("name");

-- CreateIndex
CREATE INDEX "Province_name_idx" ON "Province"("name");

-- CreateIndex
CREATE INDEX "Municipality_name_provinceId_idx" ON "Municipality"("name", "provinceId");

-- CreateIndex
CREATE UNIQUE INDEX "Municipality_name_provinceId_key" ON "Municipality"("name", "provinceId");

-- CreateIndex
CREATE INDEX "Town_name_municipalityId_idx" ON "Town"("name", "municipalityId");

-- CreateIndex
CREATE UNIQUE INDEX "Town_name_municipalityId_key" ON "Town"("name", "municipalityId");

-- CreateIndex
CREATE INDEX "ProductAvailability_productId_provinceId_municipalityId_tow_idx" ON "ProductAvailability"("productId", "provinceId", "municipalityId", "townId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAvailability_productId_provinceId_municipalityId_tow_key" ON "ProductAvailability"("productId", "provinceId", "municipalityId", "townId");

-- CreateIndex
CREATE INDEX "Category_name_idx" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Company_name_idx" ON "Company"("name");

-- CreateIndex
CREATE INDEX "Currency_name_baseRate_isDefault_isBase_idx" ON "Currency"("name", "baseRate", "isDefault", "isBase");

-- CreateIndex
CREATE INDEX "Price_productId_currencyId_value_isFixed_idx" ON "Price"("productId", "currencyId", "value", "isFixed");

-- CreateIndex
CREATE INDEX "Product_categoryId_companyId_name_priceBaseCurrency_priceBa_idx" ON "Product"("categoryId", "companyId", "name", "priceBaseCurrency", "priceBaseDiscount", "stock");

-- AddForeignKey
ALTER TABLE "Municipality" ADD CONSTRAINT "Municipality_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Town" ADD CONSTRAINT "Town_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAvailability" ADD CONSTRAINT "ProductAvailability_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAvailability" ADD CONSTRAINT "ProductAvailability_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAvailability" ADD CONSTRAINT "ProductAvailability_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAvailability" ADD CONSTRAINT "ProductAvailability_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE CASCADE ON UPDATE CASCADE;
