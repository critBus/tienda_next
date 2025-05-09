/**
 * @jest-environment node
 */

import { GET } from "../route";
import prisma from "@/libs/prisma";
import { SUCCES } from "@/types";

describe("GET /api/currencies (integration)", () => {
  beforeAll(async () => {
    // Limpia la tabla y agrega datos iniciales
    await prisma.currency.deleteMany();
    await prisma.currency.createMany({
      data: [
        {
          name: "USD",
          baseRate: 1.0,
          isDefault: true,
          isBase: true,
          symbol: "$",
        },
        {
          name: "EUR",
          baseRate: 0.92,
          isDefault: false,
          isBase: false,
          symbol: "€",
        },
      ],
    });
  });

  afterAll(async () => {
    // Limpia la tabla y cierra la conexión
    await prisma.currency.deleteMany();
    await prisma.$disconnect();
  });

  it("should return currencies from the real database", async () => {
    const response = await GET();
    const json = await response.json();
    expect(json.status).toBe(SUCCES);
    expect(json.data.length).toBe(2);
    expect(json.data[0]).toHaveProperty("name", "USD");
    expect(json.data[1]).toHaveProperty("name", "EUR");
  });
});
