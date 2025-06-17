import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas/auth";
import PrismaRepository from "@/prisma/PrismaRepository";
import { customEmailPasswordAuthProvider } from "./credentials/emailPassword";
import { custom2FAEmailCodeProvider } from "./credentials/2faEmailCode";

export default {
  providers: [
    GitHub,
    Google,
    customEmailPasswordAuthProvider,
    custom2FAEmailCodeProvider,
  ],
} satisfies NextAuthConfig;
