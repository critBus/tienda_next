import { Product } from "@/types";
import ProductsSection from "./ProductsSection";
import APIService from "@/app/service/APIService";

export default async function BestSellingProducts() {
  const products: Product[] = await APIService.products.getProducts();
  return (
    <ProductsSection
      title="Productos más Vendidos"
      products={products}
      gray_background={false}
    />
  );
}
