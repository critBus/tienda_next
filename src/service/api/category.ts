import { Category, ApiResponse, SUCCES } from "@/types";
import { api } from "../api";
const URL = "/categories";
export const all = async (): Promise<Category[]> => {
  try {
    const response = await api.get(URL);

    const data: ApiResponse<Category[]> = response.data;
    if (data.status != SUCCES) {
      return Promise.reject(data);
    }
    return data.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
