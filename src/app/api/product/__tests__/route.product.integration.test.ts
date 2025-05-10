/**
 * @jest-environment node
 */

import { FilterType } from "@/store/slices/locationSlice";
import { GET } from "../route";
import prisma from "@/libs/prisma";

describe("GET /api/product (integration)", () => {
  let location: FilterType = {};
  beforeAll(async () => {
    // Limpia y crea productos de prueba
    await prisma.productAvailability.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.company.deleteMany();
    await prisma.town.deleteMany();
    await prisma.municipality.deleteMany();
    await prisma.province.deleteMany();

    const provinciaHabana = await prisma.province.create({
      data: { name: "La Habana" },
    });
    const municipioHabanaVieja = await prisma.municipality.create({
      data: { name: "La Habana Vieja", provinceId: provinciaHabana.id },
    });
    const puebloCentroHistorico = await prisma.town.create({
      data: {
        name: "Centro Histórico",
        municipalityId: municipioHabanaVieja.id,
      },
    });

    location = {
      provinceId: provinciaHabana.id,
      municipalityId: municipioHabanaVieja.id,
      townId: puebloCentroHistorico.id,
    };

    const category = await prisma.category.create({
      data: { name: "CatBest" },
    });
    const company = await prisma.company.create({ data: { name: "CompBest" } });

    const product1 = await prisma.product.create({
      data: {
        name: "Producto1",
        description: "Desc1",
        priceBaseCurrency: 10,
        stock: 10,
        ignoreStock: false,
        published: true,
        image: "/img1.png",
        categoryId: category.id,
        companyId: company.id,
        brand: "Marca1",
        itsNew: true,
      },
    });

    const product2 = await prisma.product.create({
      data: {
        name: "Producto2",
        description: "Desc2",
        priceBaseCurrency: 20,
        stock: 5,
        ignoreStock: false,
        published: true,
        image: "/img2.png",
        categoryId: category.id,
        companyId: company.id,
        brand: "Marca2",
        itsNew: false,
      },
    });

    await prisma.productAvailability.create({
      data: {
        ...location,
        productId: product1.id,
      },
    });

    await prisma.productAvailability.create({
      data: {
        ...location,
        productId: product2.id,
      },
    });
  });

  afterAll(async () => {
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.company.deleteMany();
    await prisma.$disconnect();
  });

  it("should return best selling products from the real database", async () => {
    const req = {
      url: `http://localhost/api/product?provinceId=${location.provinceId}&municipalityId=${location.municipalityId}&townId=${location.townId}`,
    } as any;
    const response = await GET(req);
    const json = await response.json();
    expect(json.status).toBe("success");
    expect(Array.isArray(json.data)).toBe(true);
    expect(json.data.length).toBeGreaterThanOrEqual(2);
    expect(json.data[0]).toHaveProperty("name");
  });
});
