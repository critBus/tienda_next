import { Product, ProductDetail } from "@/types";

import {
  Product as ProductPrisma,
  Price as PricePrisma,
  Currency,
  Category,
  Company,
  ProductAvailability,
} from "@/app/generated/prisma/index";

interface FilterType {
  provinceId?: number | null;
  municipalityId?: number | null;
  townId?: number | null;
}
interface PricePrismaResponse extends PricePrisma {
  currency: Currency;
}
interface ProductPrismaResponse extends ProductPrisma {
  Price: PricePrismaResponse[];
  category: Category;
  company: Company;
  availableLocations: ProductAvailability[];
}

export function parseProducts(
  products_response: ProductPrismaResponse[]
): Product[] {
  const products: Product[] = products_response.map((product) => ({
    ...product,
    priceBaseCurrency: Number(product.priceBaseCurrency),
    priceBaseDiscount: Number(product.priceBaseDiscount),
    Price: product.Price.map((price) => ({
      ...price,
      value: Number(price.value),
      currency: {
        ...price.currency,
        baseRate: Number(price.currency.baseRate),
      },
    })), // Map each price in the array
  }));
  return products;
}
