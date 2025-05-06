import React from "react";
import Providers from "@/providers/Providers";
import RootLayoutContent from "@/components/layouts/RootLayoutContent";

const ProviderRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      <RootLayoutContent>{children}</RootLayoutContent>
    </Providers>
  );
};

export default ProviderRootLayout;
