import { act, render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import ProductCard from "./ProductCard";

import ProviderRootLayout from "../layouts/ProviderRootLayout";
import { createStore } from "@/store";

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <Provider store={createStore()}>{children}</Provider>
);

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

const mockProduct = {
  id: 1,
  name: "Cerveza Premium",
  description: "Cerveza artesanal de alta calidad",
  priceBaseCurrency: 5.99,
  priceBaseDiscount: null,
  stock: 2,
  ignoreStock: false,
  published: true,
  image: "/assets/products/img/cerveza.png",
  discountPercentage: 20,
  freeShipping: true,
  categoryId: 1,
  companyId: 1,
  itsNew: true,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
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
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      currency: {
        id: 1,
        name: "USD",
        baseRate: 1.0,
        isDefault: true,
        isBase: true,
        symbol: "$",
      },
    },
  ],
};

describe("ProductCard Component", () => {
  afterEach(async () => {
    // console.log("va a limpiar los store");
    jest.clearAllMocks(); // Clear mocks after each test
  });
  const setup = () => {
    render(<ProductCard product={mockProduct} />, {
      wrapper: AllProviders,
    });
  };

  it("renders product details correctly", async () => {
    setup();

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.company.name)).toBeInTheDocument();
    expect(screen.getByText("Envio Gratis")).toBeInTheDocument();
    expect(screen.getByText("-20%")).toBeInTheDocument();
  });

  it("increments and decrements quantity correctly", async () => {
    setup();

    const incrementButton = screen.getByTestId("idtest-button-add");
    const decrementButton = screen.getByTestId("idtest-button-less");
    const quantityDisplay = screen.getByTestId("idtest-quantity");

    expect(quantityDisplay).toHaveTextContent("1");
    expect(decrementButton).toBeInTheDocument();
    expect(decrementButton).toHaveClass("cursor-not-allowed");
    expect(incrementButton).not.toHaveClass("cursor-not-allowed");

    fireEvent.click(incrementButton);
    expect(quantityDisplay).toHaveTextContent("2");
    expect(decrementButton).not.toHaveClass("cursor-not-allowed");

    fireEvent.click(decrementButton);
    expect(quantityDisplay).toHaveTextContent("1");
  });

  it("disables add button when stock is insufficient", async () => {
    setup();
    const incrementButton = screen.getByTestId("idtest-button-add");
    expect(incrementButton).not.toHaveClass("cursor-not-allowed");
    fireEvent.click(incrementButton);
    expect(incrementButton).toHaveClass("cursor-not-allowed");
  });

  it("disables add to cart button when stock is insufficient", async () => {
    setup();
    const incrementButton = screen.getByTestId("idtest-button-add");
    expect(incrementButton).not.toHaveClass("cursor-not-allowed");
    fireEvent.click(incrementButton);

    const addToCartButton = screen.getByTestId("idtest-button-cart-add");
    expect(addToCartButton).not.toHaveClass("cursor-not-allowed");
    fireEvent.click(addToCartButton);
    expect(addToCartButton).toHaveClass("cursor-not-allowed");
  });
  it("2disables add to cart button when stock is insufficient", async () => {
    setup();
    const incrementButton = screen.getByTestId("idtest-button-add");
    expect(incrementButton).not.toHaveClass("cursor-not-allowed");
    fireEvent.click(incrementButton);

    const addToCartButton = screen.getByTestId("idtest-button-cart-add");
    expect(addToCartButton).not.toHaveClass("cursor-not-allowed");
    fireEvent.click(addToCartButton);
    expect(addToCartButton).toHaveClass("cursor-not-allowed");
    //   expect(screen.getByText("No se puede agregar mas")).toBeInTheDocument();
    // expect(addToCartButton).toBeDisabled();
  });

  //   it("disables add button after click in add to cart when stock is insufficient", async () => {
  //     await setup();
  //     const incrementButton = screen.getByTestId("idtest-button-add");
  //     expect(incrementButton).not.toHaveClass("cursor-not-allowed");
  //       const addToCartButton = screen.getByTestId("idtest-button-cart-add");
  //       expect(addToCartButton).not.toHaveClass("cursor-not-allowed");
  //       fireEvent.click(addToCartButton);
  //       expect(incrementButton).toHaveClass("cursor-not-allowed");
  //       expect(addToCartButton).not.toHaveClass("cursor-not-allowed");
  //   });

  //   it("shows insufficient stock modal when quantity exceeds stock", () => {
  //     const store = setupStore();
  //     render(
  //       <Provider store={store}>
  //         <ProductCard product={mockProduct} />
  //       </Provider>
  //     );

  //     const incrementButton = screen.getAllByRole("button")[1];
  //     for (let i = 0; i < 11; i++) {
  //       fireEvent.click(incrementButton);
  //     }

  //     const addToCartButton = screen.getByText("Añadir");
  //     fireEvent.click(addToCartButton);

  //     expect(screen.getByText("Stock insuficiente")).toBeInTheDocument();
  //   });
});
