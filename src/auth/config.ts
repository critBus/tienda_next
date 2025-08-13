import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

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
