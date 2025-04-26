import prisma from "@/libs/prisma";
import { ProductDTO } from "@/types"; // Asegúrate que este tipo es correcto o ajústalo
import { Decimal } from "@prisma/client/runtime/library";

// Helper para asegurar que el precio base sea un número antes de multiplicar
function safeMultiply(price: Decimal, rate: Decimal): number {
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
  // Usaremos una variable temporal para almacenar productos antes de Promise.all
  // para poder referenciarlos fácilmente al crear ProductAvailability
  const productData = [
    // Producto 1: Disponible solo en La Habana (Provincia)
    {
      name: "Cerveza Premium",
      description: "Cerveza artesanal de alta calidad",
      priceBaseCurrency: 5.99,
      priceBaseDiscount: null,
      stock: 50,
      image: "/assets/products/img/cerveza.png",
      discountPercentage: null,
      itsNew: true,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Bebidas")!.id,
      companyId: companies[0].id,
      brand: "Marca1",
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
      itsNew: true,
      image: "/assets/products/img/pasta_barbicue.png",
      discountPercentage: 11.11,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[1].id,
      brand: "Marca2",
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
      stock: 100,
      itsNew: false,
      image: "/assets/products/img/especias_refinidas.png",
      discountPercentage: null,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[1].id,
      brand: "Marca1",
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
    // Producto 4: Disponible a nivel nacional (sin registro en ProductAvailability)
    {
      name: "Masa para Pizza",
      description: "Masa fresca para pizza artesanal",
      priceBaseCurrency: 2.99,
      priceBaseDiscount: null,
      stock: 40,
      image: "/assets/products/img/vainilla.png",
      discountPercentage: null,
      itsNew: false,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Alimentos")!.id,
      companyId: companies[2].id,
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
    // Producto 5: Disponible en Pinar del Río (Provincia) y en el pueblo Centro Histórico (Habana Vieja)
    {
      name: "Refresco Nacional",
      description: "Refresco sabor cola",
      priceBaseCurrency: 1.5,
      priceBaseDiscount: null,
      stock: 200,
      itsNew: true,
      image: "/assets/products/img/pomos-de-agua.png", // Necesitarás esta imagen
      discountPercentage: null,
      freeShipping: false,
      categoryId: categories.find((c) => c.name === "Bebidas")!.id,
      companyId: companies[0].id,
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
  ];

  const createdProducts = [];
  for (const data of productData) {
    const images = data.ProductImage;

    // Crear el producto
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        priceBaseCurrency: data.priceBaseCurrency,
        priceBaseDiscount: data.priceBaseDiscount,
        stock: data.stock,
        itsNew: data.itsNew,
        image: data.image,
        discountPercentage: data.discountPercentage,
        freeShipping: data.freeShipping,
        categoryId: data.categoryId,
        companyId: data.companyId,
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

  // Ajusta la conversión a ProductDTO si es necesario, o usa los `createdProducts` directamente
  const products: ProductDTO[] = createdProducts.map((p) => ({
    ...p,
  })); // Asegura tipo Decimal a number si es necesario
  console.log(`Productos creados: ${products.length}`);

  // --- Crear Precios para los productos ---
  console.log("Creando precios...");
  const prices = await Promise.all(
    products.flatMap((product) =>
      currencies.map((currency) =>
        prisma.price.create({
          data: {
            productId: product.id,
            currencyId: currency.id,
            // Usar la función segura para multiplicar
            value: safeMultiply(product.priceBaseCurrency, currency.baseRate),
            isFixed: currency.isBase, // El precio es fijo si es la moneda base
          },
        })
      )
    )
  );
  console.log(`Precios creados: ${prices.length}`);

  // --- Crear Disponibilidad de Productos ---
  console.log("Creando disponibilidad de productos...");
  const availabilityEntries = await Promise.all([
    // Producto 1 (Cerveza): Disponible en Provincia La Habana
    prisma.productAvailability.create({
      data: {
        productId: products.find((p) => p.name === "Cerveza Premium")!.id,
        provinceId: provinciaHabana.id,
        // municipalityId y townId son null por defecto
      },
    }),
    // Producto 2 (Pasta Barbacoa): Disponible en Municipio Plaza
    prisma.productAvailability.create({
      data: {
        productId: products.find((p) => p.name === "Pasta Barbacoa")!.id,
        municipalityId: municipioPlaza.id,
      },
    }),
    // Producto 3 (Especias): Disponible en Pueblo Vedado
    prisma.productAvailability.create({
      data: {
        productId: products.find((p) => p.name === "Especias Refinadas")!.id,
        townId: puebloVedado.id,
      },
    }),
    // Producto 4 (Masa Pizza): Disponible Nacionalmente - NO SE CREA REGISTRO
    // Producto 5 (Refresco): Disponible en Provincia Pinar del Río
    prisma.productAvailability.create({
      data: {
        productId: products.find((p) => p.name === "Refresco Nacional")!.id,
        provinceId: provinciaPinar.id,
      },
    }),
    // Producto 5 (Refresco): También disponible en Pueblo Centro Histórico (Habana Vieja)
    prisma.productAvailability.create({
      data: {
        productId: products.find((p) => p.name === "Refresco Nacional")!.id,
        townId: puebloCentroHistorico.id,
      },
    }),
  ]);
  console.log(
    `Registros de disponibilidad creados: ${availabilityEntries.length}`
  );

  console.log("Seeding completado exitosamente!");
}

main()
  .catch(async (e) => {
    console.error("Error durante el seeding:", e);
    await prisma.$disconnect(); // Asegura desconexión en caso de error
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
