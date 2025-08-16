import prisma from "@/prisma/config";

import { faker } from "@faker-js/faker";

export async function factoryUser(overrides = {}) {
  const data = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.person.fullName(),
    ...overrides,
  };
  return prisma.user.create({ data });
}
