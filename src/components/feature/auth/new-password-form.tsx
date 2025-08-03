"use client";
import { Link } from "@/i18n/navigation";
import { LoginSchema, NewPasswordSchema } from "@/schemas/auth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { login } from "@/actions/auth/login";
import { useTranslations } from "next-intl";
import ErrorAlert from "@/components/ui/ErrorAlert";
import GeneralLoader from "@/components/shared/loaders/GeneralLoader";
import {
  AUTH_URL_LOGIN_2FA,
  AUTH_URL_LOGIN_MESSAGE,
  AUTH_URL_LOGIN,
  REDIRECT_LOGIN_SUCCESSFUL,
} from "@/auth/routes";
import { newPassword } from "@/actions/auth/new-password";
import {
  resendResetPassword,
  resetPassword,
} from "@/actions/auth/reset-password";

type TypeSchemaForm = z.infer<typeof NewPasswordSchema>;
const NewPasswordForm = () => {
  const t = useTranslations("Auth.ResetPassword");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>(
    searchParams.get("error") ?? ""
  );
  const [success, setSuccess] = useState<string | undefined>("");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeSchemaForm>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const handlerSubmit = (values: TypeSchemaForm) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values, token).then((data) => {
        if (data.success) {
          //setSuccess(data.success);
          console.log(`reset success: ${data.success}`);
          const message = data.success;
          const encodedMessage = encodeURIComponent(message);
          const redirectUrl = `${AUTH_URL_LOGIN_MESSAGE}?success=${encodedMessage}`;
          router.push(redirectUrl);
          return;
        }
        setError(data.error);
      });
    });
  };
  const handlerResendEmail = () => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      if (!token) {
        setError(t("invalidLink"));
        return;
      }
      const data = await resendResetPassword({ token });
      if (data.error) {
        reset();
        const errorMessage = data.error;
        const encodedMessage = encodeURIComponent(errorMessage);
        const redirectUrl = `${AUTH_URL_LOGIN}?error=${encodedMessage}`;
        router.push(redirectUrl);
        return;
      }
      if (data.success) {
        const successMessage = data.success;
        const encodedMessage = encodeURIComponent(successMessage);
        const redirectUrl = `${AUTH_URL_LOGIN}?success=${encodedMessage}`;
        router.push(redirectUrl);
        return;
      }
      setError(t("SomethingWentWrong"));
    });
  };

  if (isPending) {
    return <GeneralLoader />;
  }
  return (
    <div className="w-full lg:w-4/12 px-4">
      <div
        className="relative flex flex-col min-w-0 
      break-words w-full  shadow-lg 
      rounded-lg bg-blueGray-200 border-0"
      >
        <div className="flex-auto  lg:px-10 pb-3 pt-0">
          <div className="text-blueGray-400 text-center mb-3 font-bold">
            <small>{t("resetPassword")}</small>
          </div>
          {error && (
            <ErrorAlert title="Error" errors={[error]} className="my-2" />
          )}
          <form onSubmit={handleSubmit(handlerSubmit)}>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                {t("newPassword")}
              </label>
              <input
                type="password"
                {...register("password")}
                id="id-input-password"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder={t("newPassword")}
              />
              <p className="text-red">{errors.password?.message}</p>
            </div>

            <div className="text-center mt-6">
              <button
                disabled={isPending}
                id="id-button-submit"
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                {t("ChangePassword")}
              </button>
            </div>
          </form>

          <div className="flex flex-wrap  relative">
            <div className="w-1/2">
              <Link href="/auth/login" className="text-blueGray-600 ">
                <button
                  type="button"
                  className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:cursor-pointer "
                >
                  <small>{t("BackToTheLogin")}</small>
                </button>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <button
                type="button"
                className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:cursor-pointer "
                onClick={handlerResendEmail}
              >
                <small className="text-blueGray-600">{t("ResendEmail")}</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordForm;
