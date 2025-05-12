"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SubscriptionsSection() {
  const t = useTranslations("SubscriptionsSection");

  return (
    <div className="relative flex justify-center items-center h-[354px]">
      <Image
        src="/assets/suscriptions/bg.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative h-[186px] lg:h-[230px] max-w-[340px] lg:max-w-[650px] bg-white/50 flex flex-col p-4 lg:px-8 lg:pt-8 lg:pb-2 text-center rounded-md lg:items-center">
        <div className="roboto-bold text-[#D09504] text-xl lg:text-3xl">
          {t("title")}
        </div>
        <div className="roboto">{t("description")}</div>
        <div className="flex flex-row mt-4 lg:mt-8 h-[48px] lg:w-[80%]">
          <input
            className="grow border-[#CAD4E2] border-2 rounded-l-md placeholder:pl-4 placeholder:text-[#BAB8B8] placeholder:font-[Roboto]"
            type="text"
            placeholder={t("placeholder")}
          />
          <button className="bg-[#4F6A8E] roboto-bold text-lg text-white px-4">
            {t("button")}
          </button>
        </div>
      </div>
    </div>
  );
}
