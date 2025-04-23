import { Product } from "@/types";
import ProductsSection from "./ProductsSection";
import APIService from "@/service/APIService";

export default async function LinkingYourPurchases() {
  const products: Product[] = await APIService.products.getProducts();
  return (
    <ProductsSection title="Vinculados a tus Compras" products={products} />
  );
}
