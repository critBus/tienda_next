"use server";

import { signIn } from "@/auth/auth";
import { VerificationCodeSchema } from "@/schemas/auth";
import { AuthError } from "next-auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";
import { Auth2faCodeEmailError } from "@/lib/server/errors/2faEmailError";

export const login2faEmailCode = async (
  values: z.infer<typeof VerificationCodeSchema>,
  callbackUrl?: string
) => {
  const validatedFields = VerificationCodeSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Formato de código inválido." };
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
    return { success: "¡Login exitoso!" };
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
          return { error: "El código de verificación es incorrecto." };
        default:
          return { error: "Algo salió mal. Inténtalo de nuevo." };
      }
    }
    // Si no es un AuthError, lo relanzamos para que se maneje como un error de servidor.
    throw error;
  }
};
