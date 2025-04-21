import CellPhoneNavigation from "@/components/CellPhoneNavigation";
import CopyrightSection from "@/components/CopyrightSection";
import FooterSection from "@/components/FooterSection";
import HeaderComponent from "@/components/HeaderComponent";
import NavigationMenu from "@/components/NavigationMenu";
import type { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent/>
        <NavigationMenu/>
        {children}
        <FooterSection/>
        <CopyrightSection/>
        <CellPhoneNavigation/>
      </body>
    </html>
  );
}
