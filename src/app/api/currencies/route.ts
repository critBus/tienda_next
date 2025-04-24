import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { SUCCES, ERROR } from "@/types";

export async function GET() {
  try {
    const currencies = await prisma.currency.findMany({
      orderBy: {
        isDefault: "desc",
      },
    });
    return NextResponse.json({
      status: SUCCES,
      data: currencies,
      code: 200,
    });
  } catch (error) {
    console.error("Error al obtener las monedas:", error);

    return NextResponse.json(
      {
        status: ERROR,
        message: "Error al obtener las monedas",
        code: 500,
      },
      { status: 500 }
    );
  }
}
