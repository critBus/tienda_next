import React from "react";
import Providers from "@/components/providers/Providers";
import ShopLayout from "./ShopLayout";

const ProviderRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      <ShopLayout>{children}</ShopLayout>
    </Providers>
  );
};

export default ProviderRootLayout;
