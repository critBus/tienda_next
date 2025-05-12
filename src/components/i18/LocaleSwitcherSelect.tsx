"use client";

import { useParams } from "next/navigation";
import { Locale, useTranslations } from "next-intl";
import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

// import EsFlag from "/assets/flags/a1x1/flag_es.svg";
// import EnFlag from "/assets/flags/a1x1/flag_en.svg";
import Image from "next/image";

type Props = {
  langKeys: string[];
  defaultValue: string;
};

function FlagIcon({
  countryCode,
  isSelected = false,
}: {
  countryCode: string;
  isSelected: boolean;
}) {
  return (
    <span
      className={`w-[24px] h-[24px] text-[24px] rounded-full border-0 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.06)] bg-white inline-block ${
        !isSelected ? "mr-2" : ""
      }
                      relative  leading-none  bg-contain bg-center 
                      bg-no-repeat 
                      `}
    >
      <Image
        src={`/assets/flags/1x1/${countryCode}.svg`}
        alt="Facebook"
        width={24}
        height={24}
        className="rounded-full"
      />
    </span>
  );
}

export default function LocaleSwitcherSelect({
  langKeys,
  defaultValue,
}: Props) {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = async (nextLocale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };
  //hover:border-2 hover:border-black
  return (
    <div className="flex items-center z-40">
      <div className="relative inline-block sm:text-left">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="h-full mr-1  p-2  
          border border-gray-300 rounded-md shadow-sm
           hover:cursor-pointer  flex items-center justify-center 
           hover:scale-110 hover:border-gray-600 transition-transform duration-200 ease-in-out"
        >
          <Image
            src={`/assets/flags/4x1/${defaultValue}.svg`}
            alt="Facebook"
            width={24}
            height={24}
            className=""
          />
        </button>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-[140px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-selector"
          >
            <div className="py-1 flex flex-col gap-2" role="none">
              {langKeys.map((language, index) => {
                return (
                  <button
                    key={language}
                    onClick={() => handleLanguageChange(language)}
                    className={`${
                      defaultValue === language
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }  px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${
                      index % 2 === 0 ? "rounded-r" : "rounded-l"
                    }`}
                    role="menuitem"
                  >
                    <FlagIcon countryCode={language} isSelected={false} />
                    <span className="truncate">{t(language)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
