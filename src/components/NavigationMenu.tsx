"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function NavigationMenu() {
  const t = useTranslations("NavigationMenu");

  return (
    <div className="max-sm:hidden bg-[#E5EAF0] h-12 flex flex-row text-[#7A7474] text-sm roboto gap-5 justify-center items-center">
      <button type="button" className="hover:text-black text-[#405774]">
        {t("home")}
      </button>
      <button type="button" className="hover:text-black">
        {t("allProducts")}
      </button>
      <button type="button" className="hover:text-black">
        {t("shops")}
      </button>
      <button type="button" className="flex flex-row hover:text-black">
        <span>{t("categories")}</span>
        <Image
          src="/assets/navigation_desk/icons/arrow-right.svg"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </button>
      <button type="button" className="hover:text-black">
        {t("sellWithUs")}
      </button>
      <button type="button" className="hover:text-black">
        {t("contactUs")}
      </button>
      <button type="button" className="hover:text-black">
        {t("faq")}
      </button>
    </div>
  );
}
