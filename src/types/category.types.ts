// 1. Importamos el tipo original y lo renombramos
import { Category as CategoryPrisma } from "@/app/generated/prisma/index";

// 2. Creamos un alias exportable para el tipo original
export type CategoryDTO = CategoryPrisma;

// 3. Extendemos el tipo original en nuestra interfaz
export interface Category extends CategoryPrisma {
  link: string;
}

export type CategorySerializer = Omit<
  CategoryPrisma,
  "createdAt" | "updatedAt"
>;
