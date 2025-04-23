import { Product } from "@/types";
import ProductsSection from "./ProductsSection";
import APIService from "@/service/APIService";

export default async function LatestAdditions() {
  const products: Product[] = await APIService.products.getProducts();
  return <ProductsSection title="Últimos Añadidos" products={products} />;
}
