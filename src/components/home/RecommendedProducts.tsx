import PrismaService from "@/service/PrismaService";
import ProductsSection from "./ProductsSection";
import { Product } from "@/types";

export default async function RecommendedProducts() {
  const recommendedProducts: Product[] =
    await PrismaService.products.getProducts();
  return (
    <ProductsSection
      title="Productos recomendados"
      products={recommendedProducts}
    />
  );
}
