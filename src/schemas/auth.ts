import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string(),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string(),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email("Email is required"),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(3, "Minimum 6 characters requirid"),
});

export const VerificationCodeSchema = z.object({
  code: z.string(),
  // .regex(/^\d{6}$/, {
  //   message: "El código debe tener exactamente 6 dígitos numéricos.",
  // }),
});

export type TypeSchemaVerificationCode = z.infer<typeof VerificationCodeSchema>;
