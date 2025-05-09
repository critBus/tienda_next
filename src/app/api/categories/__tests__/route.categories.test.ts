import { GET } from "../route";
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import { SUCCES, ERROR } from "@/types";

jest.mock("@/libs/prisma", () => ({
  category: {
    findMany: jest.fn(),
  },
}));

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe("GET /api/categories", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return categories on success", async () => {
    const mockCategories = [{ id: 1, name: "cat1" }];
    (prisma.category.findMany as jest.Mock).mockResolvedValue(mockCategories);

    const mockJson = jest.fn();
    (NextResponse.json as jest.Mock).mockImplementation(mockJson);

    await GET();

    expect(prisma.category.findMany).toHaveBeenCalled();
    expect(NextResponse.json).toHaveBeenCalledWith({
      status: SUCCES,
      data: mockCategories,
      code: 200,
    });
  });

  it("should handle errors and return 500", async () => {
    (prisma.category.findMany as jest.Mock).mockRejectedValue(
      new Error("fail")
    );
    const mockJson = jest.fn();
    (NextResponse.json as jest.Mock).mockImplementation(mockJson);

    await GET();

    expect(prisma.category.findMany).toHaveBeenCalled();
    expect(NextResponse.json).toHaveBeenCalledWith(
      {
        status: ERROR,
        message: "Error al obtener las categorías",
        code: 500,
      },
      { status: 500 }
    );
  });
});
