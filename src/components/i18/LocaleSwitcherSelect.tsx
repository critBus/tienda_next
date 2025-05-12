"use client";

import { useParams } from "next/navigation";
import { Locale, useTranslations } from "next-intl";
import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

type Props = {
  langKeys: string[];
  defaultValue: string;
};

function FlagIcon({ countryCode }: { countryCode: string }) {
  console.log(`countryCode ${countryCode}`); //${countryCode}
  return (
    <span
      className={`fi fis w-[24px] h-[24px] text-[24px] rounded-full border-0 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.06)] bg-white inline-block mr-2
                      relative  leading-none  bg-contain bg-center bg-no-repeat bg-[url('/assets/flags/1x1/${countryCode}.svg')]`}
    ></span>
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

  return (
    <div className="flex items-center z-40">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <FlagIcon countryCode={defaultValue} />
            {t(defaultValue)}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-selector"
          >
            <div className="py-1 grid grid-cols-2 gap-2" role="none">
              {langKeys.map((language, index) => {
                return (
                  <button
                    key={language}
                    onClick={() => handleLanguageChange(language)}
                    className={`${
                      defaultValue === language
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } block px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${
                      index % 2 === 0 ? "rounded-r" : "rounded-l"
                    }`}
                    role="menuitem"
                  >
                    <FlagIcon countryCode={language} />
                    {/* <span
                      className="fi fis w-[24px] h-[24px] text-[24px] rounded-full border-0 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.06)] bg-white inline-block mr-2
                      relative  leading-none before:content-['\\00a0'] bg-contain bg-center bg-no-repeat bg-[url('/assets/flags/1x1/es.svg')]
                    "
                    >
                      asd
                    </span> */}
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
