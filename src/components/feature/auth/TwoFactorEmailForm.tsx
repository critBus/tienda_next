"use client";
import { Link } from "@/i18n/navigation";
import {
  LoginSchema,
  TypeSchemaVerificationCode,
  VerificationCodeSchema,
} from "@/schemas/auth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { login } from "@/actions/auth/login";
import { useTranslations } from "next-intl";
import ErrorAlert from "@/components/ui/ErrorAlert";
import GeneralLoader from "@/components/shared/loaders/GeneralLoader";
import { login2faEmailCode } from "@/actions/auth/login2faEmailCode";
import { AUTH_URL_LOGIN, REDIRECT_LOGIN_SUCCESSFUL } from "@/auth/routes";
import { resend2faEmailCode } from "@/actions/auth/resend2faEmailCode";
import SuccessAlert from "@/components/ui/SuccessAlert";
type OTPState = [string, string, string, string, string, string];
type TypeSchemaForm = z.infer<typeof LoginSchema>;
const TwoFactorEmailForm = () => {
  const t = useTranslations("Auth.2faEmailCode");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isValidCode, setIsValidCode] = useState<boolean>(false);
  const [otp, setOtp] = useState<OTPState>(["", "", "", "", "", ""]); // Array with 6 empty strings
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Array of refs for each input field
  const [code, setCode] = useState(otp.join(""));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.currentTarget);
      if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        if (index == 5) {
          newOtp[index] = "";
        }
        setOtp(newOtp as OTPState);
        //validateOpt();
        inputRefs.current[index - 1]?.focus();
      }
    }
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[0-9]{1}$/.test(e.key)) {
      e.preventDefault();
      const index = inputRefs.current.indexOf(e.currentTarget);
      if (index != 5) {
        if (otp[index] == e.key) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const index: number = inputRefs.current.indexOf(target);
    const value = target.value;
    console.log(`entra ${value}`);
    if (value && /^[0-9]{1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp as OTPState);
      //validateOpt();
      console.log(`newOtp.join("") ${newOtp.join("")}`);

      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("") as OTPState;
    setOtp(digits);
    //validateOpt();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<TypeSchemaVerificationCode>({
    resolver: zodResolver(VerificationCodeSchema),
    defaultValues: {
      code: otp.join(""),
    },
  });
  useEffect(() => {
    const newCode = otp.join("");
    setValue("code", newCode);
    console.log(`newCode ${newCode}`);
    const match = new RegExp(`^[0-9]{6}$`).test(newCode);
    console.log(`match ${match}`);
    setIsValidCode(match);
    setCode(newCode);
  }, [otp]);

  const handlerSubmit = (values: TypeSchemaVerificationCode) => {
    setSuccess("");
    setError("");
    console.log(values);
    startTransition(() => {
      login2faEmailCode(values, callbackUrl || undefined)
        .then((data) => {
          if (data?.error) {
            reset();
            if (data.redirectToMessage) {
              const errorMessage = data.error;
              const encodedMessage = encodeURIComponent(errorMessage);
              const redirectUrl = `${AUTH_URL_LOGIN}?error=${encodedMessage}`;
              router.push(redirectUrl);
              return;
            }
            setError(data.error);
          }
          if (data?.success) {
            reset();
            //setSuccess(data.success);
            router.push(REDIRECT_LOGIN_SUCCESSFUL);
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

  const handlerResend2fa = () => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      const data = await resend2faEmailCode();
      if (data.error) {
        reset();
        if (data.redirectToMessage) {
          const errorMessage = data.error;
          const encodedMessage = encodeURIComponent(errorMessage);
          const redirectUrl = `${AUTH_URL_LOGIN}?error=${encodedMessage}`;
          router.push(redirectUrl);
          return;
        }
        setError(data.error);
      }
      if (data.success) {
        setSuccess(t("CodeWastSent"));
      }
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
            <small>{t("2FAAutentication")}</small>
          </div>
          {error && (
            <ErrorAlert title="Error" errors={[error]} className="my-2" />
          )}
          {success && (
            <SuccessAlert title="Exito" messages={[success]} className="my-2" />
          )}
          <form onSubmit={handleSubmit(handlerSubmit)}>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                {t("Code")}
              </label>
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
                    bg-white rounded text-sm shadow   text-center
                     w-full 
                     
                     
                      transition-transform duration-200 ease-in-out hover:scale-110 
                     
                    focus:border-white focus:ring-2 focus:ring-white focus:outline-none"
                    value={digit}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    id={`id-digit-${index}`}
                  />
                ))}
              </div>

              {/* Input oculto para el formulario */}
              <input
                {...register("code", {
                  required: "El código es requerido",
                  minLength: 6,
                  maxLength: 6,
                  pattern: /^[0-9]{6}$/,
                })}
                type="hidden"
                value={code}
              />
              <p className="text-red">{errors.code?.message}</p>
            </div>

            <div className="text-center mt-6">
              <button
                disabled={isPending || !isValidCode}
                id="id-button-submit"
                className={`
                    text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full
                text-white
                ${
                  isValidCode
                    ? "bg-blueGray-800  active:bg-blueGray-600 cursor-pointer " +
                      "transition-transform duration-200 ease-in-out hover:scale-110 hover:cursor-pointer "
                    : "bg-blueGray-400"
                }
                  `}
                type="submit"
              >
                {t("Check")}
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
                onClick={handlerResend2fa}
              >
                <small className="text-blueGray-600">{t("ResendCode")}</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorEmailForm;
