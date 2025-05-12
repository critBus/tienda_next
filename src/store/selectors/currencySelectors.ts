import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
// Memoizar el selector
const selectCurrencyState = (state: RootState) => state.currency;
export const selectCurrencyData = createSelector(
  selectCurrencyState,
  (currency) => ({
    currencies: currency.currencies,
    selectedCurrency: currency.selectedCurrency,
    isLoading: currency.isLoading,
  })
);
