"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FooterSection() {
  const t = useTranslations("FooterSection");

  return (
    <div className="bg-[#232F3F] lg:flex lg:justify-center">
      <div className="max-w-[1800px] flex flex-col text-left p-4">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col text-left lg:w-60">
            <span className="roboto text-[#B2B2B2] text-base lg:roboto-bold lg:text-white">
              WhatsApp
            </span>
            <span className="source-sans-pro text-white mt-2 text-lg lg:text-[#B2B2B2]">
              +(34) 624 60 67 70
            </span>
            <span className="roboto text-[#B2B2B2] mt-2 text-base lg:roboto-bold lg:text-white">
              {t("contactUs")}
            </span>
            <span className="source-sans-pro text-white mt-2 text-lg lg:text-[#B2B2B2]">
              contacto@tsotienda.com
            </span>
          </div>

          <div className="flex flex-col text-left lg:w-60 lg:order-first">
            <span className="roboto text-[#B2B2B2] mt-4 text-base">
              {t("howHelp")}
            </span>
            <span className="roboto-bold text-white mt-2 text-lg lg:text-1xl">
              {t("contactAnytime")}
            </span>
          </div>
          <div className="flex flex-col text-left lg:w-96">
            <span className="source-sans-pro text-white mt-4 text-lg">
              {t("subscribeTitle")}
            </span>
            <div className="flex flex-row mt-2 h-[48px]">
              <input
                className="grow border-[#DF194C] bg-white border-2 rounded-l-md placeholder:pl-4 placeholder:text-[#BAB8B8] placeholder:font-['Arial']"
                type="text"
                placeholder={t("subscribePlaceholder")}
              />
              <button className="bg-[#DF194C] rounded-r-md heebo text-lg text-white px-4">
                {t("subscribeButton")}
              </button>
            </div>
          </div>
          <div className="flex flex-col text-left lg:w-60 lg:items-end">
            <span className="source-sans-pro text-[#B2B2B2] mt-4 text-lg">
              {t("followUs")}
            </span>
            <div className="flex flex-row justify-start gap-3 mt-3">
              <Image
                src="/assets/footer/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <Image
                src="/assets/footer/usuarios.svg"
                alt="Usuarios"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <Image
                src="/assets/footer/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr className="border-t-2 border-gray-500 w-full mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-4 lg:flex-wrap">
          <div className="flex flex-col text-left mt-2 lg:w-60">
            <span className="roboto text-[#B2B2B2] text-base">
              {t("linksTitle")}
            </span>
            <span className="source-sans-pro text-white mt-4 text-lg">
              {t("home")}
            </span>
            <span className="source-sans-pro text-white mt-1 text-lg">
              {t("terms")}
            </span>
            <span className="source-sans-pro text-white mt-1 text-lg">
              {t("becomeSeller")}
            </span>
          </div>
          <div className="flex flex-col text-left mt-6 lg:w-60">
            <span className="roboto text-[#B2B2B2] text-base">
              {t("legal")}
            </span>
            <span className="source-sans-pro text-white mt-4 text-lg">
              {t("shippingPolicy")}
            </span>
            <span className="source-sans-pro text-white mt-1 text-lg">
              {t("privacyPolicy")}
            </span>
            <span className="source-sans-pro text-white mt-1 text-lg">
              {t("warrantyPolicy")}
            </span>
          </div>
          <div className="flex flex-col text-left mt-6 lg:grow lg:items-end">
            <div className="lg:flex lg:flex-col lg:text-left">
              <div className="lg:w-full">
                <span className="roboto-bold text-white text-4xl lg:text-xl">
                  {t("securePayment")}
                </span>
              </div>

              <div className="flex flex-row gap-1 justify-start py-4">
                <Image
                  src="/assets/footer/mastecardrecortado.png"
                  alt="Mastercard"
                  width={40}
                  height={25}
                />
                <Image
                  src="/assets/footer/visa.png"
                  alt="Visa"
                  width={40}
                  height={25}
                />
                <Image
                  src="/assets/footer/americaexpresajustado.png"
                  alt="American Express"
                  width={40}
                  height={25}
                />
                <Image
                  src="/assets/footer/discoverajustado.png"
                  alt="Discover"
                  width={40}
                  height={25}
                />
                <Image
                  src="/assets/footer/tropipay.png"
                  alt="Tropipay"
                  width={40}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
