import ProductDetail from "@/components/product/ProductDetail";
import React from "react";

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <ProductDetail id={params.id} />
    </div>
  );
};
export default Page;
