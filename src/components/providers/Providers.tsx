"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import MainLoader from "@/components/common/loaders/MainLoader";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<MainLoader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
