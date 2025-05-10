import { CurrencyDTO } from "./currency.types";

export type PriceDTO = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  currencyId: number;
  value: number;
  isFixed: boolean;
};
export interface Price {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  currencyId: number;
  value: number;
  isFixed: boolean;
  currency: CurrencyDTO;
}

export type PriceSerializer = Omit<Price, "createdAt" | "updatedAt">;
