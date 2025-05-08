export const setupMock = () => {
  jest.mock("axios", () => {
    const fake_currencies = [
      {
        id: 1,
        name: "USD",
        baseRate: 1.0,
        isDefault: true,
        isBase: true,
        symbol: "$",
      },
      {
        id: 2,
        name: "EUR",
        baseRate: 0.92,
        isDefault: false,
        isBase: false,
        symbol: "$",
      },
    ];
    const fake_categories = [
      {
        id: 1,
        name: "Alimentos",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/assets/categories/img/buffet.png",
      },
      {
        id: 2,
        name: "Alimentos2",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/assets/categories/img/buffet.png",
      },
      {
        id: 3,
        name: "Alimentos3",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/assets/categories/img/buffet.png",
      },
      {
        id: 4,
        name: "Alimentos4",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/assets/categories/img/buffet.png",
      },
      {
        id: 5,
        name: "Alimentos5",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/assets/categories/img/buffet.png",
      },
      {
        id: 6,
        name: "Alimentos6",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/assets/categories/img/buffet.png",
      },
    ];
    const fake_products = [
      {
        id: 1,
        name: "Cerveza Premium",
        description: "Cerveza artesanal de alta calidad",
        priceBaseCurrency: 5.99,
        priceBaseDiscount: null,
        stock: 50,
        ignoreStock: false,
        published: true,
        image: "/assets/products/img/cerveza.png",
        discountPercentage: null,
        freeShipping: false,
        categoryId: 1,
        companyId: 1,
        itsNew: true,
        // createdAt: new Date(),
        // updatedAt: new Date(),
        brand: "Marca1",
        category: {
          id: 1,
          name: "Bebidas",
          // createdAt: new Date(),
          // updatedAt: new Date(),
          image: "/assets/categories/img/bebidas.png",
        },
        company: {
          id: 1,
          name: "Distribuidora Nacional",
        },
        Price: [
          {
            id: 1,
            productId: 1,
            currencyId: 1,
            value: 5.99,
            isFixed: true,
            // createdAt: new Date(),
            // updatedAt: new Date(),
          },
        ],
      },
      {
        id: 2,
        name: "Pasta Barbacoa",
        description: "Pasta especial para barbacoa",
        priceBaseCurrency: 4.5,
        priceBaseDiscount: 4.0,
        stock: 30,
        ignoreStock: true,
        published: true,
        image: "/assets/products/img/pasta_barbicue.png",
        discountPercentage: 11.11,
        freeShipping: false,
        categoryId: 1,
        companyId: 1,
        itsNew: true,
        // createdAt: new Date(),
        // updatedAt: new Date(),
        brand: "Marca2",
        category: {
          id: 1,
          name: "Alimentos",
          // createdAt: new Date(),
          // updatedAt: new Date(),
          image: "/assets/categories/img/buffet.png",
        },
        company: {
          id: 1,
          name: "Importadora Selecta",
        },
        Price: [
          {
            id: 2,
            productId: 2,
            currencyId: 1,
            value: 4.5,
            isFixed: true,
            // createdAt: new Date(),
            // updatedAt: new Date(),
          },
        ],
      },
    ];

    const mockedCreateAxios = jest.fn();
    const restponseGet = (url: string) => {
      let data = fake_products;
      if (url == "/categories") {
        data = fake_categories;
      } else if (url == "/currencies") {
        data = fake_currencies;
      }
      return {
        data: {
          status: "success",
          data: data,
        },
      };
    };

    mockedCreateAxios.mockReturnValue({
      get: restponseGet,
    });

    return {
      create: mockedCreateAxios,
    };
  }); // Mock axios
};
