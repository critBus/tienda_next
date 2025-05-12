"use client";

import { Product } from "@/types";
import ProductCard from "./ProductCard";
import ShowMeAllTheProducts from "./ShowMeAllTheProducts";
import { useTranslations } from "next-intl";

interface ProductsSectionProps {
  title: string;
  products: Product[];
  gray_background?: boolean;
}

export default function ProductsSection({
  title,
  products,
  gray_background = true,
}: ProductsSectionProps) {
  const t = useTranslations("ProductsSection");
  return (
    <section className={gray_background ? "bg-[#F8F8F8]" : "bg-white"}>
      <div className="pt-6 pb-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <h2 className="text-2xl sm:text-3xl roboto-bold mb-8 text-center md:text-left">
          {title}
        </h2>

        {/* Lista de productos */}
        {products && products.length > 0 ? (
          <div className="flex justify-center flex-col sm:flex-row sm:flex-wrap gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            {t("NotHaveProducts")}
          </div>
        )}

        <ShowMeAllTheProducts />
      </div>
    </section>
  );
}
