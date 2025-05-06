import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CategoryNavigation from "@/components/home/CategoryNavigation";
import ApiService from "@/service/ApiService";

jest.mock("@/service/ApiService");

const mockedApiService = ApiService as jest.Mocked<typeof ApiService>;

describe("CategoryNavigation Component", () => {
  const fakeCategories = [
    { id: 1, name: "Alimentos", image: "/assets/categories/img/buffet.png" },
    { id: 2, name: "Bebidas", image: "/assets/categories/img/bebidas.png" },
    {
      id: 3,
      name: "Electrodomésticos",
      image: "/assets/categories/img/electrodomesticos.png",
    },
    { id: 4, name: "Ropa", image: "/assets/categories/img/ropa.png" },
  ];

  beforeEach(() => {
    mockedApiService.category.all.mockResolvedValue(fakeCategories);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders categories after fetching data", async () => {
    await act(async () => {
      render(<CategoryNavigation />);
    });

    // Wait for the categories to load
    await waitFor(() => {
      expect(screen.getByText("Alimentos")).toBeInTheDocument();
      expect(screen.getByText("Bebidas")).toBeInTheDocument();
      expect(screen.getByText("Electrodomésticos")).toBeInTheDocument();
      expect(screen.getByText("Ropa")).toBeInTheDocument();
    });
  });

  it("shows the skeleton loader while loading", async () => {
    let container;
    await act(async () => {
      container = render(<CategoryNavigation />).container;
    });

    // Check if the skeleton loader is displayed
    expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();

    // Wait for the categories to load
    await waitFor(() => {
      expect(screen.queryByText("Alimentos")).toBeInTheDocument();
    });
  });
});
