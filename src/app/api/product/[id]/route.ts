import { NextResponse } from "next/server";

import PrismaService from "@/service/PrismaService";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  //const { params } = context;
  const { id } = await params;

  try {
    // Buscar el producto por ID
    const product = await PrismaService.products.byId(parseInt(id));

    // Si no se encuentra el producto, devolver un error
    if (!product) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Producto no encontrado",
        },
        { status: 404 }
      );
    }

    // Respuesta en formato JSend
    return NextResponse.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}
