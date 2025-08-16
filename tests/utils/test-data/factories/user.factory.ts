import { createHashedPassword } from "@/lib/server/auth/createHashedPassword";
import prisma from "@/prisma/config";

import { faker } from "@faker-js/faker";

export async function factoryUser(
  overrides: {
    password?: string;
    email?: string;
    emailVerified?: Date;
    isTwoFactorEnabled?: boolean;
  } = {}
) {
  const data = {
    email: overrides.email ? overrides.email : faker.internet.email(),
    name: faker.person.fullName(),
    ...overrides,
  };
  const hashedPassword = await createHashedPassword({
    password: overrides.password
      ? overrides.password
      : faker.internet.password(),
  });
  return prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
}
