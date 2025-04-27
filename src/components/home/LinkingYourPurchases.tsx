import { Product } from "@/types";
import ProductsSection from "./ProductsSection";
import PrismaService from "@/service/PrismaService";

export default async function LinkingYourPurchases() {
  const products: Product[] = await PrismaService.products.all();
  return (
    <ProductsSection title="Vinculados a tus Compras" products={products} />
  );
}
