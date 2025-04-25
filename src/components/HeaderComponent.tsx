"use client";

import { useState } from "react";
import Image from "next/image";
import CurrencySelector from "./CurrencySelector";
import LocationSelector from "@/components/common/LocationSelector";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getLocationLabel } from "@/utils/locationLabel";

export default function HeaderComponent() {
  const [cartCount] = useState(3);
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

  return (
    <>
      {/* Versión Desktop */}
      <div className="hidden lg:flex lg:flex-row lg:justify-between p-2">
        <div className="flex flex-row ml-4 items-center">
          <Image
            src="/assets/header/TSOTienda.png"
            alt="Logo Recortado"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <div className="flex flex-row ml-4 items-center">
            <LocationSelector showText />
          </div>
        </div>
        <div className="flex flex-wrap flex-row items-stretch gap-2 p-3">
          <input
            type="text"
            id="search-input"
            placeholder="Buscar"
            className="h-full w-80 grow px-3 border border-gray-300 rounded-md text-xs font-normal font-roboto leading-snug text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 shadow-md"
          />
          <button
            type="button"
            aria-label="Buscar"
            className="h-full flex-shrink-0 p-2 bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center"
          >
            <Image
              src="/assets/header/search-normal.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="roboto-bold text-[#624602] ml-2">Buscar</span>
          </button>
        </div>
        <div className="flex flex-row items-center gap-3 mr-3">
          <CurrencySelector />
          <Image
            src="/assets/header/icono base.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <div className="relative flex items-center cursor-pointer">
            <Image
              src="/assets/header/shopping-cart.svg"
              alt=""
              width={40}
              height={32}
              className="h-8 w-10 text-gray-500 hover:text-gray-700 transition-colors"
            />
            {cartCount > 0 && (
              <div className="absolute top-0 right-0 mt-[-8px] mr-[-8px] bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                <span className="text-[12px]">{cartCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Versión Mobile */}
      <div className="lg:hidden flex flex-col gap-2 p-2">
        <div className="flex place-content-between items-center">
          <Image
            src="/assets/header/image 3.png"
            alt="Logo Recortado"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <div>{getLocationLabel(selectedLocation)}</div>
          <CurrencySelector />
        </div>
        <div className="w-full flex flex-row items-center gap-2">
          <div className="h-8 w-auto flex-shrink-0">
            <LocationSelector showText={false} />
          </div>

          <input
            type="text"
            id="search-input"
            placeholder="Busca chuleta de cerdo"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md text-xs font-normal font-roboto leading-snug align-middle text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            aria-label="Buscar"
            className="flex-shrink-0 p-2 bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center"
          >
            <Image
              src="/assets/header/search-normal.svg"
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
