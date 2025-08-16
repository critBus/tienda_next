import { UserRole } from "@prisma/client"; //User as PrismaUser

// export type User = PrismaUser;
export interface User {
  id: string;
  email: string;
  password: string | null;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
  image: string | null;
  role: UserRole;
  emailVerified: Date | null;
  isTwoFactorEnabled: boolean;
}

export type NewUser = Omit<User, "id">;

export type AuthUser = Pick<User, "email" | "password">;
