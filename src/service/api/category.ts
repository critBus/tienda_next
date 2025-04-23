export interface CategoryDTO {
  id: number;
  name: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getAll(): Promise<CategoryDTO[]> {
  try {
    const response = await fetch("/api/categories");
    const data = await response.json();

    if (data.status === "error") {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
