import { NextResponse } from "next/server";
import { SUCCES, ERROR } from "@/types";
import prisma from "@/libs/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json({
      status: SUCCES,
      data: categories,
      code: 200,
    });
  } catch {
    // (error) console.error("Error al obtener categorías:", error);
    return NextResponse.json(
      {
        status: ERROR,
        message: "Error al obtener las categorías",
        code: 500,
      },
      { status: 500 }
    );
  }
}
