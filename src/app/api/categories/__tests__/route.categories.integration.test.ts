/**
 * @jest-environment node
 */

import { GET } from "../route";
import prisma from "@/libs/prisma";
import { SUCCES } from "@/types";

describe("GET /api/categories (integration)", () => {
  beforeAll(async () => {
    // Limpia la tabla y agrega datos iniciales
    await prisma.category.deleteMany();
    await prisma.category.createMany({
      data: [{ name: "cat1" }, { name: "cat2" }],
    });
  });

  afterAll(async () => {
    // Limpia la tabla y cierra la conexión
    await prisma.category.deleteMany();
    await prisma.$disconnect();
  });

  it("should return categories from the real database", async () => {
    const response = await GET();
    // Extrae el json de la respuesta
    const json = await response.json();
    expect(json.status).toBe(SUCCES);
    expect(json.data.length).toBe(2);
    expect(json.data[0]).toHaveProperty("name", "cat1");
  });
});
