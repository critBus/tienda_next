import { Link } from "@/i18n/navigation";
import { LoginSchema } from "@/schemas/auth";
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
  LOGIN_2FA_URL,
  LOGIN_MESSAGE,
  REDIRECT_LOGIN_SUCCESSFUL,
} from "@/auth/routes";
type TypeSchemaForm = z.infer<typeof LoginSchema>;
const LoguinForm = () => {
  const t = useTranslations("Auth.Login");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

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
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });
  const handlerSubmit = (values: TypeSchemaForm) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values, callbackUrl || undefined)
        .then((data) => {
          if (data?.error) {
            reset();
            setError(data.error);
          }
          if (data?.success) {
            if (data?.sendEmailVerification) {
              const errorMessage = t("confirmationEmailSent");
              const encodedMessage = encodeURIComponent(errorMessage);
              const redirectUrl = `${LOGIN_MESSAGE}?success=${encodedMessage}`;
              router.push(redirectUrl);
              return;
            }
            reset();
            //setSuccess(data.success);
            router.push(REDIRECT_LOGIN_SUCCESSFUL);
            // TODO agregar notificacion
            return;
          }
          if (data?.twoFactor) {
            router.push(LOGIN_2FA_URL);
            // TODO agregar notificacion
            return;
          }
        })
        .catch((error) => {
          console.log(error);
          setError("something went wrong");
        });
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
      rounded-lg bg-blueGray-200 border-0 max-sm:p-4"
      >
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center mb-3">
            <h6 className="text-blueGray-500 text-sm font-bold">
              {t("SignInWith")}
            </h6>
          </div>
          <div className="btn-wrapper text-center">
            <button
              className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
            >
              <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
              Github
            </button>
            <button
              className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
            >
              <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
              Google
            </button>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div className="flex-auto  lg:px-10 pb-3 pt-0">
          <div className="text-blueGray-400 text-center mb-3 font-bold">
            <small>{t("OrSignInWithCredentials")}</small>
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
                {t("Email")}
              </label>
              <input
                type="email"
                {...register("email")}
                id="id-input-email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder={t("Email")}
              />
              <p className="text-red">{errors.email?.message}</p>
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                {t("Password")}
              </label>
              <input
                type="password"
                {...register("password")}
                id="id-input-password"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder={t("Password")}
              />
              <p className="text-red">{errors.password?.message}</p>
            </div>

            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                  {t("RememberMe")}
                </span>
              </label>
            </div>

            <div className="text-center mt-6">
              <button
                disabled={isPending}
                id="id-button-submit"
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 w-full
                hover:shadow-lg  ease-linear transition-all duration-150
                hover:cursor-pointer hover:scale-110
                "
                type="submit"
              >
                {t("SignIn")}
              </button>
            </div>
          </form>

          <div className="flex flex-row">
            <div className="w-1/2">
              <Link
                href="/auth/reset-password/send-email"
                className="text-blueGray-600 
                cursor-pointer 
                "
              >
                <small
                  className="
                  inline-block
                  transition-transform 
                duration-200 
                ease-in-out 
                hover:scale-110
                "
                >
                  {t("ForgotPassword")}
                </small>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <Link
                href="/auth/register"
                className="text-blueGray-600 
                inline-block
                cursor-pointer 
                transition-transform 
                duration-200 
                ease-in-out 
                hover:scale-110 
                hover:cursor-pointer"
              >
                <small>{t("CreateNewAccount")}</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoguinForm;
