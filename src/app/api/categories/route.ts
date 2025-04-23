import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json({
      status: "success",
      data: categories,
      code: 200,
    });
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Error al obtener las categorías",
        code: 500,
      },
      { status: 500 }
    );
  }
}
