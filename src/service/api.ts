import { API_URL } from "@/config";
import axios from "axios";
// console.log("axios");
// console.log(axios);
export const api = axios.create({
  baseURL: API_URL, // Reemplaza con la URL de tu API
});
// console.log("api");
// console.log(api);
