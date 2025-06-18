"use server";

import { signIn } from "@/auth/auth";
import { VerificationCodeSchema } from "@/schemas/auth";
import { AuthError } from "next-auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";
import { Auth2faCodeEmailError } from "@/lib/server/errors/2faEmailError";
import { getTranslations } from "next-intl/server";

export const login2faEmailCode = async (
  values: z.infer<typeof VerificationCodeSchema>,
  callbackUrl?: string
) => {
  const t = await getTranslations("AuthServerActions");
  const validatedFields = VerificationCodeSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: t("invalidCode") };
  }

  const { code } = validatedFields.data;

  try {
    // Simplemente llamamos a signIn. La lógica compleja ya está en el provider.
    await signIn("2fa", {
      code,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });

    // Si signIn no lanza un error, la redirección ocurrirá automáticamente.
    // Esta línea normalmente no se alcanza.
    return { success: t("loginSuccess") };
  } catch (error) {
    if (error instanceof Auth2faCodeEmailError) {
      return { error: error.simpleMessage };
    }
    // console.log("Error al intentar loguearse");
    if (error instanceof AuthError) {
      console.log("fue un error de AuthError");
      console.log(error);
      console.log(`error.cause: ${error.cause}`);
      console.log(`error.message: ${error.message}`);

      // Error genérico para códigos incorrectos
      switch (error.type) {
        case "CredentialsSignin":
          return { error: t("invalidCode") };
        default:
          return { error: t("somethingWentWrong") };
      }
    }
    // Si no es un AuthError, lo relanzamos para que se maneje como un error de servidor.
    throw error;
  }
};
