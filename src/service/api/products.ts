import prisma from "@/libs/prisma";
import { Product, ProductDTO } from "@/types";
import { Company, Category } from "../../app/generated/prisma/index";

export async function getProducts(): Promise<Product[]> {
  console.log("intenta llamar a obtener los productos");
  try {
    const products_response: ProductDTO[] = await prisma.product.findMany();
    const products: Product[] = [];
    for (let i = 0; i < products_response.length; i++) {
      const product_dto = products_response[i];
      const company: Company | null = await prisma.company.findUnique({
        where: { id: product_dto.companyId },
      });
      const category: Category | null = await prisma.category.findUnique({
        where: { id: product_dto.categoryId },
      });
      if (company && category) {
        products.push({
          ...product_dto,
          company,
          category,
        });
      }
    }
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getProductById(id: number): Promise<ProductDTO | null> {
  return prisma.product.findUnique({
    where: { id },
  });
}
