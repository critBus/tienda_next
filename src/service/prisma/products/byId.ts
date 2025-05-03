import { ProductDetail } from "@/types";
import prisma from "@/libs/prisma";

export async function byId(id: number): Promise<ProductDetail | null> {
  const find_product = await prisma.product.findUnique({
    where: { id: id },
    include: {
      category: true,
      company: true,
      Price: {
        include: {
          currency: true,
        },
      },
      availableLocations: {
        include: {
          province: true,
          municipality: true,
          town: true,
        },
      },
      ProductImage: true,
    },
  });
  if (!find_product) {
    return null;
  }
  const product = {
    ...find_product,
    priceBaseCurrency: Number(find_product.priceBaseCurrency),
    priceBaseDiscount: Number(find_product.priceBaseDiscount),
    Price: find_product.Price.map((price) => ({
      ...price,
      value: Number(price.value),
      currency: {
        ...price.currency,
        baseRate: Number(price.currency.baseRate),
      },
    })),
  };
  return product;
}
