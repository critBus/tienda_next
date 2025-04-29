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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["cart.items"], // Ignore paths with non-serializable values
        ignoredActions: ["cart/addToCart", "cart/hydrateCart"], // Ignore specific actions
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
