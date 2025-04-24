import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  try {
    const currencies = await prisma.currency.findMany({
      orderBy: {
        isDefault: "desc",
      },
    });
    return NextResponse.json(currencies);
  } catch (error) {
    console.error("Error al obtener las monedas:", error);
    return NextResponse.json(
      { error: "Error al obtener las monedas" },
      { status: 500 }
    );
  }
}
