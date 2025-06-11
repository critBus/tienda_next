import ProductDetail from "@/components/product/ProductDetail";
import PrismaRepository from "@/prisma/PrismaRepository";

import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await PrismaRepository.products.byId(parseInt(id));
  return <div>{product && <ProductDetail product={product} />}</div>;
};
export default Page;
