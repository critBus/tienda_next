"use client";
import { useCurrencyInitializer } from "@/hooks/useCurrencyInitializer";
import CellPhoneNavigation from "../header/movile/CellPhoneNavigation";
import CopyrightSection from "../footer/CopyrightSection";
import FooterSection from "../footer/FooterSection";
import HeaderComponent from "../header/HeaderComponent";
import NavigationMenu from "../header/NavigationMenu";
import NotificationManager from "@/components/feature/notification/NotificationManager";
export default function ShopLayout({
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
