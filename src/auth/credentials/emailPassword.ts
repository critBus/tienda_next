import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas/auth";
import PrismaRepository from "@/prisma/PrismaRepository";
export const customEmailPasswordAuthProvider = Credentials({
  async authorize(credentials) {
    try {
      const validatedFields = LoginSchema.safeParse(credentials);
      if (validatedFields.success) {
        const { email, password } = validatedFields.data;
        const user = await PrismaRepository.users.byEmail(email);
        if (!user || !user.password) {
          return null;
        }
        const passwordMath = await bcrypt.compare(password, user.password);
        if (passwordMath) {
          return user;
        }
      }
    } catch (error) {
      console.log("error en credentials");
      console.log(error);
    }

    return null;
  },
});
