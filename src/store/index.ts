import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import locationSlice from "./slices/locationSlice";
import notificationSlice from "./slices/notificationSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    location: locationSlice,
    notification: notificationSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
