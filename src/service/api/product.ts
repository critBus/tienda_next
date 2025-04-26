import { ProductDetail, ApiResponse, SUCCES } from "@/types";
import { api } from "../api";

const URL = "/product";

export const getById = async (id: number): Promise<ProductDetail> => {
  try {
    const response = await api.get(`${URL}/${id}`);

    const data: ApiResponse<ProductDetail> = response.data;
    if (data.status != SUCCES) {
      return Promise.reject(data);
    }
    return data.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
