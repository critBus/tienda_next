import PrismaService from "@/service/PrismaService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const provinceId = searchParams.get("provinceId");
    const municipalityId = searchParams.get("municipalityId");
    const townId = searchParams.get("townId");

    const location = {
      provinceId: provinceId ? Number(provinceId) : null,
      municipalityId: municipalityId ? Number(municipalityId) : null,
      townId: townId ? Number(townId) : null,
    };

    const products = await PrismaService.products.recommended({
      location: location,
    });

    return NextResponse.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Error al obtener los productos.",
      },
      { status: 500 }
    );
  }
}
