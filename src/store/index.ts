import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import locationSlice from "./slices/locationSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    location: locationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
