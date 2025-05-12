"use client";
import { useEffect, useState } from "react";

import ProductsSection from "./ProductsSection";
import { Product } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ApiService from "@/service/ApiService";
import SkeletonProductSection from "../common/loaders/SkeletonProductSection";
import { useTranslations } from "next-intl";

export default function BestSellingProducts() {
  const t = useTranslations("BestSellingProducts");
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const productsResponse = await ApiService.product.bestSelling(
          selectedLocation
        );
        setProducts(productsResponse);
      } catch {
        setError("Error al cargar los productos mas vendidos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedLocation]);

  if (loading) return <SkeletonProductSection />;
  if (error) return <p>{error}</p>;
  return (
    <ProductsSection
      title={t("title")}
      products={products}
      gray_background={false}
    />
  );
}
