import { Product } from "@/types";
import ProductsSection from "./ProductsSection";
import PrismaService from "@/service/PrismaService";

export default async function LatestAdditions() {
  const products: Product[] = await PrismaService.products.getProducts();
  return <ProductsSection title="Últimos Añadidos" products={products} />;
}
