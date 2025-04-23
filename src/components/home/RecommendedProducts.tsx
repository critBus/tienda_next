import APIService from "@/app/service/APIService";
import ProductsSection from "./ProductsSection";
import type { ProductDTO } from "@/types/index";
export default async function RecommendedProducts() {
  const recommendedProducts: ProductDTO[] =
    await APIService.products.getProducts();
  return (
    <ProductsSection
      title="Productos recomendados"
      products={recommendedProducts}
    />
  );
}
