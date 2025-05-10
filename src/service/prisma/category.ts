import { Category, CategoryDTO } from "@/types";

export async function getAll(): Promise<Category[]> {
  try {
    const response = await fetch("/api/categories");
    const data = await response.json();

    if (data.status === "error") {
      throw new Error(data.message);
    }

    return data.data.map((category: CategoryDTO) => ({
      ...category,
      createdAt: new Date(category.createdAt),
      updatedAt: new Date(category.updatedAt),
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
