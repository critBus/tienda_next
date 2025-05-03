import { ProductDetail, ApiResponse, SUCCES, Product } from "@/types";
import { api } from "../api";
import { FilterType } from "@/store/slices/locationSlice";

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

async function getListLocationProducts({
  url,
  location = null,
}: {
  url: string;
  location?: FilterType | null;
}): Promise<Product[]> {
  try {
    const params = location
      ? {
          provinceId: location.provinceId,
          municipalityId: location.municipalityId,
          townId: location.townId,
        }
      : {};

    const response = await api.get(url, { params });

    const data: ApiResponse<Product[]> = response.data;
    if (data.status !== SUCCES) {
      return Promise.reject(data);
    }
    return data.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export const getProducts = async (
  location?: FilterType
): Promise<Product[]> => {
  return getListLocationProducts({ url: URL, location });
};

export const recommended = async (
  location?: FilterType
): Promise<Product[]> => {
  return getListLocationProducts({ url: `${URL}/recommended`, location });
};

export const bestSelling = async (
  location?: FilterType
): Promise<Product[]> => {
  return getListLocationProducts({ url: `${URL}/bestSelling`, location });
};
