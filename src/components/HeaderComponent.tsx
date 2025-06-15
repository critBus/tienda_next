"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

import LocationSelector from "@/components/common/LocationSelector";

import { getLocationLabel } from "@/lib/shared/locationLabel";

import { RootState } from "@/store";

import LogoImg from "../../public/icons/logos/logo.png";
import LogoSimple from "../../public/icons/logos/sinfondosimple.png";
import CurrencySelector from "./CurrencySelector";
import LocaleSwitcher from "./i18/LocaleSwitcher";

export default function HeaderComponent() {
  const t = useTranslations("HeaderComponent");
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  ); // Calculate total items in the cart
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );
  return (
    <>
      {/* Versión Desktop */}
      <div className="hidden p-2 lg:flex lg:flex-row lg:justify-between">
        <div className="ml-4 flex flex-row items-center">
          {/* <img src="http://localhost:3000/icons/logos/logo.png"></img> */}
          <Image
            src={LogoImg} //"/icons/logos/logo.png"
            alt="Logo Recortado"
            width={512}
            height={512}
            className="h-auto w-[200px]"
          />
          <div className="ml-4 flex flex-row items-center">
            <LocationSelector showText />
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-stretch gap-2 p-3">
          <input
            type="text"
            id="search-input"
            placeholder="Buscar"
            className="border-gray-300 font-roboto text-gray-900 placeholder:text-gray-400 focus:border-blue-500 h-full w-80 grow rounded-md border px-3 text-xs font-normal leading-snug shadow-md focus:outline-none"
          />
          <button
            type="button"
            aria-label="Buscar"
            className="bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 flex h-full flex-shrink-0 items-center justify-center rounded-md p-2 transition-transform duration-200 ease-in-out hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2"
          >
            <Image
              src="/icons/header/search-normal.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="roboto-bold ml-2 text-[#624602]">Buscar</span>
          </button>
        </div>
        <div className="mr-3 flex flex-row items-center gap-3">
          <LocaleSwitcher />
          <CurrencySelector />
          <Image
            src="/icons/header/profile.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <div className="relative flex cursor-pointer items-center">
            <Image
              src="/icons/header/shopping-cart.svg"
              alt=""
              width={40}
              height={32}
              className="text-gray-500 hover:text-gray-700 h-8 w-10 transition-colors"
            />
            {cartCount > 0 && (
              <div className="bg-red-500 absolute right-0 top-0 mr-[-8px] mt-[-8px] rounded-full px-2 py-1 text-xs font-bold text-white">
                <span className="text-[12px]" data-testid="id-test-cart-count">
                  {cartCount}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Versión Mobile */}
      <div className="flex flex-col gap-2 p-2 lg:hidden">
        <div className="flex place-content-between items-center">
          <Image
            src={LogoSimple}
            alt="Logo Recortado"
            width={500}
            height={137}
            className="h-8 w-auto"
          />
          <div>{getLocationLabel(selectedLocation)}</div>
          <div className="flex flex-row items-center gap-2">
            <LocaleSwitcher />
            <CurrencySelector />
          </div>
        </div>
        <div className="flex w-full flex-row items-center gap-2">
          <div className="flex h-full w-auto flex-shrink-0 items-center justify-center">
            <LocationSelector showText={false} />
          </div>

          <input
            type="text"
            id="search-input"
            placeholder={t("search")}
            className="border-gray-300 font-roboto text-gray-900 placeholder:text-gray-400 focus:border-blue-500 flex-grow rounded-md border px-3 py-2 align-middle text-xs font-normal leading-snug focus:outline-none"
          />
          <button
            type="button"
            aria-label="Buscar"
            className="bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 flex flex-shrink-0 items-center justify-center rounded-md p-2 transition-transform duration-200 ease-in-out hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2"
          >
            <Image
              src="/icons/header/search-normal.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </>
  );
}
