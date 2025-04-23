export interface CategoryDTO {
  id: number;
  name: string;
  image?: string | null;
}

export interface Category extends CategoryDTO {
  link: string;
}
