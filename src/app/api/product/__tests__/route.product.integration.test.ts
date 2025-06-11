/**
 * @jest-environment node
 */
import { clearData } from "@/utils/testutils";

import locations from "@/data/availableLocations.json";
import prisma from "@/prisma/config";
import { FilterType } from "@/store/slices/locationSlice";

import { GET } from "../route";

describe("GET /api/product (integration)", () => {
  let location: FilterType = {};
  beforeAll(async () => {
    // Limpia y crea productos de prueba
    await clearData();

    const province = locations["provinces"][0];
    const municipalitie = province["municipalities"][0];
    const town = municipalitie["towns"][0];
    location = {
      provinceId: province["id"],
      municipalityId: municipalitie["id"],
      townId: town["id"],
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

  // afterAll(async () => {
  //   await prisma.product.deleteMany();
  //   await prisma.category.deleteMany();
  //   await prisma.company.deleteMany();
  //   await prisma.$disconnect();
  // });

  it("should return best selling products from the real database", async () => {
    const req = {
      url: `http://localhost/api/product?provinceId=${location.provinceId}&municipalityId=${location.municipalityId}&townId=${location.townId}`,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await GET(req as any);
    // eslint-disable-next-line
    const json = await response.json();
    expect(json.status).toBe("success");
    expect(Array.isArray(json.data)).toBe(true);
    expect(json.data.length).toBeGreaterThanOrEqual(2);
    expect(json.data[0]).toHaveProperty("name");
  });
});
