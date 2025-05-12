import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyDTO } from "@/types";

interface CurrencyState {
  currencies: CurrencyDTO[];
  baseCurrency: CurrencyDTO | null;
  defaultCurrency: CurrencyDTO | null;
  selectedCurrency: CurrencyDTO | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CurrencyState = {
  currencies: [],
  baseCurrency: null,
  defaultCurrency: null,
  selectedCurrency: null,
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrencies: (state, action: PayloadAction<CurrencyDTO[]>) => {
      state.currencies = action.payload;
      state.baseCurrency =
        action.payload.find((currency) => currency.isBase) || null;
      state.defaultCurrency =
        action.payload.find((currency) => currency.isDefault) || null;
      state.selectedCurrency = state.defaultCurrency;
    },
    setSelectedCurrency: (state, action: PayloadAction<CurrencyDTO>) => {
      state.selectedCurrency = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrencies, setSelectedCurrency, setLoading, setError } =
  currencySlice.actions;
export default currencySlice.reducer;
