"use client";
import { Link } from "@/i18n/navigation";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ErrorAlert from "@/components/ui/ErrorAlert";
import SuccessAlert from "@/components/ui/SuccessAlert";
import { newVerification } from "@/actions/auth/new-verification";
import { LOGIN_MESSAGE } from "@/auth/routes";

const NewVericationForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(searchParams.get("error"));
  const [success, setSuccess] = useState<string | null>(
    searchParams.get("success")
  );
  const token = searchParams.get("token");
  const t = useTranslations("Auth.2faEmailCode");

  const handlerSubmit = useCallback(() => {
    if (success || error) return;
    console.log(`token: ${token}`);
    if (token) {
      newVerification(token)
        .then((data) => {
          console.log(data);
          if (data.success) {
            console.log(`verification success: ${data.success}`);
            const message = data.success;
            const encodedMessage = encodeURIComponent(message);
            const redirectUrl = `${LOGIN_MESSAGE}?success=${encodedMessage}`;
            router.push(redirectUrl);
            return;
          }
          if (data.error) {
            console.log(`verification error: ${data.error}`);
            setError(data.error ?? "");
          }
        })
        .catch((error) => {
          console.log(error);
          setError("Something went wrong");
        });
    } else {
      setError("Missing token");
    }
  }, [token, success, error]);
  useEffect(() => {
    handlerSubmit();
  }, [handlerSubmit]);

  return (
    <div className="w-full lg:w-4/12 px-4">
      <div
        className="relative flex flex-col min-w-0 
      break-words w-full  shadow-lg 
      rounded-lg bg-blueGray-200 border-0"
      >
        <div className="flex-auto  lg:px-10 pb-3 pt-3">
          {error && (
            <ErrorAlert title="Error" errors={[error ?? ""]} className="my-2" />
          )}
          {success && (
            <SuccessAlert
              title="Exito"
              messages={[success ?? ""]}
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

export default NewVericationForm;
