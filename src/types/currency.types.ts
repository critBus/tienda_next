import { Decimal } from "@prisma/client/runtime/library";

export interface CurrencyDTO {
  id: number;
  name: string;
  baseRate: Decimal;
  isDefault: boolean;
  isBase: boolean;
  symbol: string;
}

export interface Currency {
  id: number;
  name: string;
  baseRate: number;
  isDefault: boolean;
  isBase: boolean;
  symbol: string;
}
