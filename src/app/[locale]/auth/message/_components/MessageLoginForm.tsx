"use client";
import { Link } from "@/i18n/navigation";

import { useSearchParams } from "next/navigation";
import React from "react";
import { useTranslations } from "next-intl";
import ErrorAlert from "@/components/ui/ErrorAlert";
import SuccessAlert from "@/components/ui/SuccessAlert";

const MessageLoginForm = () => {
  const t = useTranslations("Auth.2faEmailCode");
  const searchParams = useSearchParams();

  return (
    <div className="w-full lg:w-4/12 px-4">
      <div
        className="relative flex flex-col min-w-0 
      break-words w-full  shadow-lg 
      rounded-lg bg-blueGray-200 border-0"
      >
        <div className="flex-auto  lg:px-10 pb-3 pt-3">
          {searchParams.get("error") && (
            <ErrorAlert
              title="Error"
              errors={[searchParams.get("error") ?? ""]}
              className="my-2"
            />
          )}
          {searchParams.get("success") && (
            <SuccessAlert
              title="Exito"
              messages={[searchParams.get("success") ?? ""]}
              className="my-2"
            />
          )}

          <div className="flex flex-wrap  relative">
            <div className="w-full text-center">
              <Link href="/auth/login" className="text-blueGray-600 ">
                <button
                  type="button"
                  className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:cursor-pointer "
                >
                  <small>{t("BackToTheLogin")}</small>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageLoginForm;
