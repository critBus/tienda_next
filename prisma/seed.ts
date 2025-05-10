import prisma from "@/libs/prisma";
import { Decimal } from "@prisma/client/runtime/library";

// Helper para asegurar que el precio base sea un número antes de multiplicar
function safeMultiply(price: Decimal | number, rate: Decimal | number): number {
  const numPrice = Number(price);
  const numRate = Number(rate);
  if (isNaN(numPrice) || isNaN(numRate)) {
    console.warn(
      `Advertencia: Multiplicación inválida encontrada. Precio: ${price}, Tasa: ${rate}`
    );
    return 0; // O maneja el error como prefieras
  }
  // Redondear a 2 decimales como en el schema Decimal(12, 2)
  return Math.round(numPrice * numRate * 100) / 100;
}

export async function main() {
  console.log("Iniciando el seeding...");

  // --- Crear Monedas ---
  const currencies = await Promise.all([
    prisma.currency.create({
      data: {
        name: "USD",
        baseRate: 1.0,
        isDefault: true,
        isBase: true,
        symbol: "$",
      },
    }),
    prisma.currency.create({
      data: {
        name: "EUR",
        baseRate: 0.92,
        isDefault: false,
        isBase: false,
        symbol: "$",
      }, // Tasa actualizada aprox.
    }),
    prisma.currency.create({
      data: {
        name: "GBP",
        baseRate: 0.8,
        isDefault: false,
        isBase: false,
        symbol: "$",
      }, // Tasa actualizada aprox.
    }),
    prisma.currency.create({
      data: {
        name: "CUP",
        baseRate: 24.0,
        isDefault: false,
        isBase: false,
        symbol: "$",
      },
    }),
  ]);
  console.log(`Monedas creadas: ${currencies.length}`);

  // --- Crear Categorías ---
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Electrodomésticos",
        image: "/assets/categories/img/electrodomesticos.png",
      },
    }),
    prisma.category.create({
      data: {
        name: "Alimentos",
        image: "/assets/categories/img/buffet.png",
      }, // Renombrado/Ajustado
    }),
    prisma.category.create({
      data: { name: "Bebidas", image: "/assets/categories/img/bebidas.png" },
    }),
  ]);
  console.log(`Categorías creadas: ${categories.length}`);

  // --- Crear Compañías ---
  const companies = await Promise.all([
    prisma.company.create({ data: { name: "Distribuidora Nacional" } }),
    prisma.company.create({ data: { name: "Importadora Selecta" } }),
    prisma.company.create({ data: { name: "Bodega Local" } }),
  ]);
  console.log(`Compañías creadas: ${companies.length}`);

  // --- Crear Ubicaciones (Ejemplo: Cuba) ---
  console.log("Creando ubicaciones...");
  const provinciaHabana = await prisma.province.create({
    data: { name: "La Habana" },
  });
  const provinciaPinar = await prisma.province.create({
    data: { name: "Pinar del Río" },
  });

  const municipioPlaza = await prisma.municipality.create({
    data: { name: "Plaza de la Revolución", provinceId: provinciaHabana.id },
  });
  const municipioHabanaVieja = await prisma.municipality.create({
    data: { name: "La Habana Vieja", provinceId: provinciaHabana.id },
  });
  const municipioPinarDelRio = await prisma.municipality.create({
    data: { name: "Pinar del Río", provinceId: provinciaPinar.id },
  });

  const puebloVedado = await prisma.town.create({
    data: { name: "Vedado", municipalityId: municipioPlaza.id },
  });
  await prisma.town.create({
    data: { name: "Nuevo Vedado", municipalityId: municipioPlaza.id },
  });
  const puebloCentroHistorico = await prisma.town.create({
    data: { name: "Centro Histórico", municipalityId: municipioHabanaVieja.id },
  });
  await prisma.town.create({
    data: { name: "Centro Ciudad", municipalityId: municipioPinarDelRio.id },
  });

  console.log("Ubicaciones creadas: 2 Provincias, 3 Municipios, 4 Pueblos");

  // --- Crear Productos ---
  console.log("Creando productos...");
  const productData = [
    // Producto 1: Disponible solo en La Habana (Provincia)
    {
      name: "Cerveza Premium",
      description: "Cerveza artesanal de alta calidad",
      priceBaseCurrency: 5.99,
      priceBaseDiscount: null,
      published: true,
      stock: 50,
      ignoreStock: false,
      image: "/assets/products/img/cerveza.png",
      discountPercentage: null,
      itsNew: true,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Bebidas")!.id,
      companyId: companies[0].id,
      brand: "Marca1",
      viewCount: 100,
      purchaseCount: 20,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/cerveza.png",
        },
        {
          cover: false,
          image: "/assets/products/img/cerveza.png",
        },
        {
          cover: false,
          image: "/assets/products/img/cerveza.png",
        },
      ],
    },
    // Producto 2: Disponible solo en el municipio Plaza de la Revolución
    {
      name: "Pasta Barbacoa",
      description: "Pasta especial para barbacoa",
      priceBaseCurrency: 4.5,
      priceBaseDiscount: 4.0,
      stock: 30,
      ignoreStock: true,
      published: true,
      itsNew: true,
      image: "/assets/products/img/pasta_barbicue.png",
      discountPercentage: 11.11,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[1].id,
      brand: "Marca2",
      viewCount: 50,
      purchaseCount: 10,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/pasta_barbicue.png",
        },
        {
          cover: false,
          image: "/assets/products/img/pasta_barbicue.png",
        },
        {
          cover: false,
          image: "/assets/products/img/pasta_barbicue.png",
        },
      ],
    },
    // Producto 3: Disponible solo en el pueblo Vedado
    {
      name: "Especias Refinadas",
      description: "Mezcla de especias gourmet",
      priceBaseCurrency: 3.49,
      priceBaseDiscount: null,
      published: true,
      stock: 100,
      ignoreStock: false,
      itsNew: false,
      image: "/assets/products/img/especias_refinidas.png",
      discountPercentage: null,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[1].id,
      brand: "Marca1",
      viewCount: 80,
      purchaseCount: 15,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/especias_refinidas.png",
        },
        {
          cover: false,
          image: "/assets/products/img/especias_refinidas.png",
        },
        {
          cover: false,
          image: "/assets/products/img/especias_refinidas.png",
        },
      ],
    },
    // Producto 4: Disponible a nivel nacional
    {
      name: "Masa para Pizza",
      description: "Masa fresca para pizza artesanal",
      priceBaseCurrency: 2.99,
      priceBaseDiscount: null,
      published: true,
      stock: 40,
      ignoreStock: false,
      image: "/assets/products/img/vainilla.png",
      discountPercentage: null,
      itsNew: false,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[2].id,
      viewCount: 120,
      purchaseCount: 30,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/vainilla.png",
        },
        {
          cover: false,
          image: "/assets/products/img/vainilla.png",
        },
        {
          cover: false,
          image: "/assets/products/img/vainilla.png",
        },
      ],
    },
    // Producto 5: Disponible en Pinar del Río y Centro Histórico
    {
      name: "Refresco Nacional",
      description: "Refresco sabor cola",
      priceBaseCurrency: 1.5,
      priceBaseDiscount: null,
      stock: 200,
      ignoreStock: false,
      published: true,
      itsNew: true,
      image: "/assets/products/img/pomos-de-agua.png",
      discountPercentage: null,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Bebidas")!.id,
      companyId: companies[0].id,
      viewCount: 150,
      purchaseCount: 40,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/pomos-de-agua.png",
        },
        {
          cover: false,
          image: "/assets/products/img/pomos-de-agua.png",
        },
        {
          cover: false,
          image: "/assets/products/img/pomos-de-agua.png",
        },
      ],
    },
    // Additional products to reach 10 in puebloVedado
    {
      name: "Aceite de Oliva",
      description: "Aceite de oliva extra virgen",
      priceBaseCurrency: 6.99,
      priceBaseDiscount: null,
      published: true,
      stock: 60,
      ignoreStock: false,
      itsNew: true,
      image: "/assets/products/img/rico_drato.png",
      discountPercentage: null,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[2].id,
      brand: "Marca3",
      viewCount: 70,
      purchaseCount: 25,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/rico_drato.png",
        },
      ],
    },
    {
      name: "Harina de Trigo",
      description: "Harina de trigo para repostería",
      priceBaseCurrency: 2.5,
      priceBaseDiscount: null,
      published: true,
      stock: 80,
      ignoreStock: false,
      itsNew: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: null,
      freeShipping: true,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[0].id,
      brand: "Marca4",
      viewCount: 90,
      purchaseCount: 35,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/vejetales.png",
        },
      ],
    },
    // Add more products as needed to reach 10 in puebloVedado
    {
      name: "Café Gourmet",
      description: "Café de alta calidad, ideal para baristas",
      priceBaseCurrency: 8.99,
      priceBaseDiscount: null,
      published: true,
      stock: 100,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: 10,
      itsNew: true,
      freeShipping: true,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[0].id,
      brand: "Marca5",
      viewCount: 200,
      purchaseCount: 50,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Chocolate Artesanal",
      description: "Chocolate hecho a mano con cacao puro",
      priceBaseCurrency: 4.99,
      priceBaseDiscount: null,
      published: true,
      stock: 80,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: 5,
      itsNew: false,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[1].id,
      brand: "Marca6",
      viewCount: 150,
      purchaseCount: 40,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Té Verde",
      description: "Té verde orgánico en hojas",
      priceBaseCurrency: 3.49,
      priceBaseDiscount: null,
      published: true,
      stock: 120,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: null,
      itsNew: true,
      freeShipping: true,
      categoryId: categories.find((c) => c.name === "Bebidas")!.id,
      companyId: companies[2].id,
      brand: "Marca7",
      viewCount: 100,
      purchaseCount: 30,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Mermelada de Fresa",
      description: "Mermelada casera con fresas frescas",
      priceBaseCurrency: 2.99,
      priceBaseDiscount: null,
      published: true,
      stock: 60,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: null,
      itsNew: false,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[0].id,
      brand: "Marca8",
      viewCount: 80,
      purchaseCount: 20,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Pan Integral",
      description: "Pan integral fresco y saludable",
      priceBaseCurrency: 1.99,
      priceBaseDiscount: null,
      published: true,
      stock: 50,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: null,
      itsNew: true,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[1].id,
      brand: "Marca9",
      viewCount: 70,
      purchaseCount: 15,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Queso Cheddar",
      description: "Queso cheddar madurado",
      priceBaseCurrency: 6.49,
      priceBaseDiscount: null,
      published: true,
      stock: 40,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: 15,
      itsNew: false,
      freeShipping: true,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[2].id,
      brand: "Marca10",
      viewCount: 90,
      purchaseCount: 25,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Yogur Natural",
      description: "Yogur natural sin azúcar añadido",
      priceBaseCurrency: 2.49,
      priceBaseDiscount: null,
      published: true,
      stock: 70,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: null,
      itsNew: true,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[0].id,
      brand: "Marca11",
      viewCount: 60,
      purchaseCount: 10,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Aceitunas Verdes",
      description: "Aceitunas verdes en salmuera",
      priceBaseCurrency: 3.99,
      priceBaseDiscount: null,
      published: true,
      stock: 90,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: null,
      itsNew: false,
      freeShipping: true,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[1].id,
      brand: "Marca12",
      viewCount: 110,
      purchaseCount: 35,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
    {
      name: "Mantequilla Artesanal",
      description: "Mantequilla hecha a mano con leche fresca",
      priceBaseCurrency: 5.49,
      priceBaseDiscount: null,
      published: true,
      stock: 30,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: 10,
      itsNew: true,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[2].id,
      brand: "Marca13",
      viewCount: 50,
      purchaseCount: 20,
      ProductImage: [
        {
          cover: true,
          image: "/assets/products/img/vejetales.png",
        },
      ],
    },
    {
      name: "Jugo de Naranja",
      description: "Jugo de naranja natural recién exprimido",
      priceBaseCurrency: 3.29,
      priceBaseDiscount: null,
      published: true,
      stock: 100,
      ignoreStock: false,
      image: "/assets/products/img/vejetales.png",
      discountPercentage: null,
      itsNew: false,
      freeShipping: true,
      categoryId: categories.find((c) => c.name === "Bebidas")!.id,
      companyId: companies[0].id,
      brand: "Marca14",
      viewCount: 140,
      purchaseCount: 45,
      ProductImage: [
        { cover: true, image: "/assets/products/img/vejetales.png" },
      ],
    },
  ];

  const createdProducts = [];
  for (const data of productData) {
    const images = data.ProductImage;

    // Calcular recommendationScore
    const viewCount = data.viewCount || 0;
    const purchaseCount = data.purchaseCount || 0;
    const recommendationScore = 0.3 * viewCount + 0.7 * purchaseCount;

    // Crear el producto con los nuevos campos
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        priceBaseCurrency: data.priceBaseCurrency,
        priceBaseDiscount: data.priceBaseDiscount,
        stock: data.stock,
        ignoreStock: data.ignoreStock,
        published: data.published,
        itsNew: data.itsNew,
        image: data.image,
        discountPercentage: data.discountPercentage,
        freeShipping: data.freeShipping,
        categoryId: data.categoryId,
        companyId: data.companyId,
        brand: data.brand,
        viewCount,
        purchaseCount,
        recommendationScore,
      },
    });

    createdProducts.push(product);

    // Crear las imágenes asociadas al producto
    await Promise.all(
      images.map(({ cover, image }) =>
        prisma.productImage.create({
          data: { cover, image, productId: product.id },
        })
      )
    );
  }

  const products = createdProducts.map((p) => ({
    ...p,
  })); // Asegura tipo Decimal a number si es necesario
  console.log(`Productos creadas: ${products.length}`);

  // --- Crear Precios para los productos ---
  console.log("Creando precios...");
  const prices = await Promise.all(
    products.flatMap((product) =>
      currencies.map((currency) =>
        prisma.price.create({
          data: {
            productId: product.id,
            currencyId: currency.id,
            value: safeMultiply(product.priceBaseCurrency, currency.baseRate),
            isFixed: currency.isBase,
          },
        })
      )
    )
  );
  console.log(`Precios creados: ${prices.length}`);

  // --- Crear Disponibilidad de Productos ---
  console.log("Creando disponibilidad de productos...");

  async function createProductAvailability(data: {
    productId: number;
    provinceId?: number;
    municipalityId?: number;
    townId?: number;
  }) {
    const existingEntry = await prisma.productAvailability.findFirst({
      where: {
        productId: data.productId,
        provinceId: data.provinceId || null,
        municipalityId: data.municipalityId || null,
        townId: data.townId || null,
      },
    });

    if (!existingEntry) {
      return prisma.productAvailability.create({ data });
    } else {
      console.log(
        `La disponibilidad ya existe para el producto ${data.productId} en la ubicación especificada.`
      );
      return null;
    }
  }

  const availabilityEntries = await Promise.all([
    createProductAvailability({
      productId: products.find((p) => p.name === "Cerveza Premium")!.id,
      provinceId: provinciaHabana.id,
    }),
    createProductAvailability({
      productId: products.find((p) => p.name === "Cerveza Premium")!.id,
    }),
    createProductAvailability({
      productId: products.find((p) => p.name === "Pasta Barbacoa")!.id,
      municipalityId: municipioPlaza.id,
      provinceId: municipioPlaza.provinceId,
    }),
    createProductAvailability({
      productId: products.find((p) => p.name === "Especias Refinadas")!.id,
      townId: puebloVedado.id,
      municipalityId: puebloVedado.municipalityId,
      provinceId: municipioPlaza.provinceId,
    }),
    createProductAvailability({
      productId: products.find((p) => p.name === "Refresco Nacional")!.id,
      provinceId: provinciaPinar.id,
    }),
    createProductAvailability({
      productId: products.find((p) => p.name === "Refresco Nacional")!.id,
      townId: puebloCentroHistorico.id,
      municipalityId: puebloCentroHistorico.municipalityId,
      provinceId: municipioHabanaVieja.provinceId,
    }),
  ]);

  for (const product of createdProducts) {
    await createProductAvailability({
      productId: product.id,
      townId: puebloVedado.id,
      municipalityId: puebloVedado.municipalityId,
      provinceId: municipioPlaza.provinceId,
    });
  }

  console.log(
    `Registros de disponibilidad creados: ${
      availabilityEntries.filter((entry) => entry !== null).length
    }`
  );

  console.log("Seeding completado exitosamente!");
}

main()
  .catch(async (e) => {
    console.error("Error durante el seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
