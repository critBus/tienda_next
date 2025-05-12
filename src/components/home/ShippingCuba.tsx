"use client";

import InfoShipping from "./InfoShipping";
import { useTranslations } from "next-intl";

interface Info {
  icono: string;
  title: string;
  contenct: string;
  last: boolean;
}

export default function ShippingCuba() {
  const t = useTranslations("ShippingCuba");

  const infos: Info[] = [
    {
      icono: "/assets/shipping_cuba/group.svg",
      title: t("fastDelivery"),
      contenct: t("fastDeliveryDesc"),
      last: false,
    },
    {
      icono: "/assets/shipping_cuba/bag.svg",
      title: t("productVariety"),
      contenct: t("productVarietyDesc"),
      last: false,
    },
    {
      icono: "/assets/shipping_cuba/location-tick.svg",
      title: t("shippingAllCuba"),
      contenct: t("shippingAllCubaDesc"),
      last: true,
    },
  ];

  return (
    <div className="flex flex-col px-2 lg:mt-6 lg:mb-16 pt-10 text-center roboto-condensed-bold">
      <h3 className="mx-2 mt-2 text-xl lg:text-3xl text-[#D09504] font-bold">
        {t("warehouseTitle")}
      </h3>
      <h1 className="mx-2 mt-2 mb-8 text-5xl lg:text-7xl font-bold">
        {t("mainTitle")}
      </h1>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="lg:flex lg:flex-row max-w-[1100px]">
          {infos.map((item, index) => (
            <div key={index} className="lg:flex lg:flex-row">
              <InfoShipping
                icono={item.icono}
                title={item.title}
                contenct={item.contenct}
              />
              {!item.last && (
                <div className="max-lg:hidden inline-block h-[70%] mx-8 min-h-[1em] w-0.5 self-stretch bg-[#CFCECE]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
