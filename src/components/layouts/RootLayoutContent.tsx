"use client";
import { useCurrencyInitializer } from "@/hooks/useCurrencyInitializer";
import CellPhoneNavigation from "@/components/CellPhoneNavigation";
import CopyrightSection from "@/components/CopyrightSection";
import FooterSection from "@/components/FooterSection";
import HeaderComponent from "@/components/HeaderComponent";
import NavigationMenu from "@/components/NavigationMenu";
import NotificationManager from "../common/NotificationManager";
export default function RootLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  useCurrencyInitializer();

  return (
    <>
      <HeaderComponent />
      <NavigationMenu />
      <NotificationManager />
      {children}
      <FooterSection />
      <CopyrightSection />
      <CellPhoneNavigation />
    </>
  );
}
