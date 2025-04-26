import ProductDetail from "@/components/product/ProductDetail";
import PrismaService from "@/service/PrismaService";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const product = await PrismaService.products.getById(parseInt(id));
  return <div>{product && <ProductDetail product={product} />}</div>;
};
export default Page;
