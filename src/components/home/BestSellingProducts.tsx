import { Product } from "@/types";
import ProductsSection from "./ProductsSection";
import PrismaService from "@/service/PrismaService";

export default async function BestSellingProducts() {
  const products: Product[] = await PrismaService.products.getProducts();
  return (
    <ProductsSection
      title="Productos más Vendidos"
      products={products}
      gray_background={false}
    />
  );
}
