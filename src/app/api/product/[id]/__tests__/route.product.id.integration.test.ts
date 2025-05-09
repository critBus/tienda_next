/**
 * @jest-environment node
 */

import { GET } from "../route";
import prisma from "@/libs/prisma";

describe("GET /api/product/[id] (integration)", () => {
  let productId: number;

  beforeAll(async () => {
    // Limpia la tabla y agrega un producto inicial
    await prisma.product.deleteMany();
    const product = await prisma.product.create({
      data: {
        name: "ProductoTest",
        description: "Descripción de prueba",
        priceBaseCurrency: 10.5,
        stock: 5,
        ignoreStock: false,
        published: true,
        image: "/assets/products/img/test.png",
        category: {
          create: {
            name: "CategoriaTest",
          },
        },
        company: {
          create: {
            name: "EmpresaTest",
          },
        },
        brand: "MarcaTest",
        itsNew: true,
      },
      include: {
        category: true,
        company: true,
      },
    });
    productId = product.id;
  });

  afterAll(async () => {
    // Limpia la tabla y cierra la conexión
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.company.deleteMany();
    await prisma.$disconnect();
  });

  it("should return the product from the real database", async () => {
    const response = await GET(
      {} as any,
      { params: { id: String(productId) } }
    );
    const json = await response.json();
    expect(json.status).toBe("success");
    expect(json.data).toHaveProperty("id", productId);
    expect(json.data).toHaveProperty("name", "ProductoTest");
    expect(json.data).toHaveProperty("category");
    expect(json.data).toHaveProperty("company");
  });

  it("should return 404 if product does not exist", async () => {
    const response = await GET(
      {} as any,
      { params: { id: "999999" } }
    );
    const json = await response.json();
    expect(response.status).toBe(404);
    expect(json.status).toBe("fail");
    expect(json.message).toBe("Producto no encontrado");
  });
});
