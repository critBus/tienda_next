export const SUCCES = "success";
export const ERROR = "error";
export interface ApiResponse<T> {
  data: T;
  code: number;
  status: "success" | "error";
  message?: string;
}
