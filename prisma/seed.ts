import prisma from "@/libs/prisma";
import { ProductDTO } from "@/types";

export async function main() {
  // Crear monedas
  const currencies = await Promise.all([
    prisma.currency.create({
      data: {
        name: "USD",
        baseRate: 1.0,
        isDefault: true,
        isBase: true,
      },
    }),
    prisma.currency.create({
      data: {
        name: "EUR",
        baseRate: 0.85,
        isDefault: false,
        isBase: false,
      },
    }),
    prisma.currency.create({
      data: {
        name: "GBP",
        baseRate: 0.75,
        isDefault: false,
        isBase: false,
      },
    }),
    prisma.currency.create({
      data: {
        name: "CUP",
        baseRate: 24.0,
        isDefault: false,
        isBase: false,
      },
    }),
  ]);
  console.log("Monedas creadas:", currencies.length);

  // Crear categorías
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Electrodomésticos",
        image: "/assets/categories/img/electrodomesticos.png",
      },
    }),
    prisma.category.create({
      data: {
        name: "Farmacia",
        image: "/assets/categories/img/farmacia.png",
      },
    }),
    prisma.category.create({
      data: {
        name: "Bebidas",
        image: "/assets/categories/img/bebidas.png",
      },
    }),
  ]);

  // Crear compañías
  const companies = await Promise.all([
    prisma.company.create({
      data: {
        name: "TechCorp",
      },
    }),
    prisma.company.create({
      data: {
        name: "FashionStyle",
      },
    }),
    prisma.company.create({
      data: {
        name: "HomeDecor",
      },
    }),
  ]);

  // Crear productos
  const products: ProductDTO[] = await Promise.all([
    // Productos de TechCorp
    prisma.product.create({
      data: {
        name: "Cerveza Premium",
        description: "Cerveza artesanal de alta calidad",
        priceBaseCurrency: 899.99,
        originalPrice: 999.99,
        stock: 50,
        image: "/assets/products/img/cerveza.png",
        discountPercentage: 10,
        freeShipping: true,
        categoryId: categories[2].id,
        companyId: companies[0].id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Pasta Barbacue",
        description: "Pasta especial para barbacoa",
        priceBaseCurrency: 1299.99,
        originalPrice: 1499.99,
        stock: 30,
        image: "/assets/products/img/pasta_barbicue.png",
        discountPercentage: 13.33,
        freeShipping: true,
        categoryId: categories[1].id,
        companyId: companies[0].id,
      },
    }),
    // Productos de FashionStyle
    prisma.product.create({
      data: {
        name: "Especias Refinadas",
        description: "Mezcla de especias gourmet",
        priceBaseCurrency: 29.99,
        originalPrice: 39.99,
        stock: 100,
        image: "/assets/products/img/especias_refinidas.png",
        discountPercentage: 25,
        freeShipping: false,
        categoryId: categories[1].id,
        companyId: companies[1].id,
      },
    }),
    // Productos de HomeDecor
    prisma.product.create({
      data: {
        name: "Masa para Pizza",
        description: "Masa fresca para pizza artesanal",
        priceBaseCurrency: 49.99,
        originalPrice: 59.99,
        stock: 40,
        image: "/assets/products/img/molo_para_piza.png",
        discountPercentage: 16.67,
        freeShipping: true,
        categoryId: categories[1].id,
        companyId: companies[2].id,
      },
    }),
  ]);

  // Crear precios para los productos en diferentes monedas
  const prices = await Promise.all(
    products.flatMap((product) =>
      currencies.map((currency) =>
        prisma.price.create({
          data: {
            productId: product.id,
            currencyId: currency.id,
            value:
              Number(product.priceBaseCurrency) * Number(currency.baseRate),
            isFixed: currency.isBase,
          },
        })
      )
    )
  );

  console.log("Seeding completado exitosamente!");
  console.log("Categorías creadas:", categories.length);
  console.log("Compañías creadas:", companies.length);
  console.log("Productos creados:", products.length);
  console.log("Precios creados:", prices.length);
}

main()
  .catch((e) => {
    console.error("Error durante el seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
