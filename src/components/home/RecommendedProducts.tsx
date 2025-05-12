"use client";

import { useEffect, useState } from "react";

import ProductsSection from "./ProductsSection";
import { Product } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ApiService from "@/service/ApiService";
import SkeletonProductSection from "../common/loaders/SkeletonProductSection";
import { useTranslations } from "next-intl";

export default function RecommendedProducts() {
  const t = useTranslations("RecommendedProducts");
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const products = await ApiService.product.recommended(selectedLocation);
        setRecommendedProducts(products);
      } catch {
        setError("Error al cargar los productos recomendados.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedLocation]);

  if (loading) return <SkeletonProductSection />;
  if (error) return <p>{error}</p>;

  return <ProductsSection title={t("title")} products={recommendedProducts} />;
}
