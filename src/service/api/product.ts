import { ProductDetail, ApiResponse, SUCCES, Product } from "@/types";
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

interface FilterType {
  provinceId?: number | null;
  municipalityId?: number | null;
  townId?: number | null;
}

export const getProducts = async (
  location?: FilterType
): Promise<Product[]> => {
  try {
    const params = location
      ? {
          provinceId: location.provinceId,
          municipalityId: location.municipalityId,
          townId: location.townId,
        }
      : {};

    const response = await api.get(URL, { params });

    const data: ApiResponse<Product[]> = response.data;
    if (data.status !== SUCCES) {
      return Promise.reject(data);
    }
    return data.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
