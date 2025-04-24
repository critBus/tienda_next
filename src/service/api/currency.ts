import { CurrencyDTO, ApiResponse, SUCCES } from "@/types";
import { api } from "../api";
const URL = "/currencies";
export const all = async (): Promise<CurrencyDTO[]> => {
  try {
    const response = await api.get(URL);

    const data: ApiResponse<CurrencyDTO[]> = response.data;
    if (data.status != SUCCES) {
      return Promise.reject(data);
    }
    return data.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
