import { API_URL } from "@/config";
import axios from "axios";
export const api = axios.create({
  baseURL: API_URL, // Reemplaza con la URL de tu API
});
