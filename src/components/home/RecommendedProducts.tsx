import APIService from "@/app/service/APIService";
import ProductsSection from "./ProductsSection";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
  freeShipping: boolean;
}

interface ProductApi {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function RecommendedProducts() {
  const products: ProductApi[] = await APIService.products.getProducts();
  console.log(products);
  const recommendedProducts: Product[] = products.map<Product>((product) => ({
    id: Number(product.id),
    name: product.name,
    price: product.price,
    originalPrice: product.price,
    discountPercentage: 10,
    image: product.image,
    freeShipping: true,
  }));
  return (
    <ProductsSection
      title="Productos recomendados"
      products={recommendedProducts}
    />
  );
}
