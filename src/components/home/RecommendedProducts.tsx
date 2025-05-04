"use client";

import { useEffect, useState } from "react";

import ProductsSection from "./ProductsSection";
import { Product } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ApiService from "@/service/ApiService";
import SkeletonProductSection from "../common/loaders/SkeletonProductSection";

export default function RecommendedProducts() {
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
        await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
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

  return (
    <ProductsSection
      title="Productos recomendados"
      products={recommendedProducts}
    />
  );
}
