import APIService from "@/app/service/APIService";
import ProductsSection from "./ProductsSection";
import type { Product } from "@/types/index";
export default async function RecommendedProducts() {
  const recommendedProducts: Product[] =
    await APIService.products.getProducts();
  return (
    <ProductsSection
      title="Productos recomendados"
      products={recommendedProducts}
    />
  );
}
