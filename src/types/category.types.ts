export interface CategoryDTO {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  image: string | null;
}

// 3. Extendemos el tipo original en nuestra interfaz
export interface Category extends CategoryDTO {
  link: string;
}

export type CategorySerializer = Omit<CategoryDTO, "createdAt" | "updatedAt">;
