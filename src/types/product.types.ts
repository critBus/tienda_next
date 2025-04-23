import { CategoryDTO } from "./category.types";
import { CompanyDTO } from "./company.types";

// 1. Importamos el tipo original y lo renombramos
import { Product as ProductPrisma } from "@/app/generated/prisma/index";

// 2. Creamos un alias exportable para el tipo original
export type ProductDTO = ProductPrisma;

export interface Product extends ProductDTO {
  category: CategoryDTO;
  company: CompanyDTO;
}
