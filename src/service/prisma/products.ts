import prisma from "@/libs/prisma";
import { Product, ProductDetail } from "@/types";

export async function getProducts(): Promise<Product[]> {
  console.log("intenta llamar a obtener los productos");
  const products_response = await prisma.product.findMany({
    include: {
      category: true,
      company: true,
      Price: {
        include: {
          currency: true,
        },
      },
    },
  });
  // console.log(products_response[0]);
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
  // console.log(products[0]);
  return products;
}

export async function getById(id: number): Promise<ProductDetail | null> {
  const find_product = await prisma.product.findUnique({
    where: { id: Number(id) },
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
