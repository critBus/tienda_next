"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/service/api/product";
import ProductsSection from "./ProductsSection";
import { Product } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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
        const products = await getProducts(selectedLocation);
        setRecommendedProducts(products);
      } catch (err) {
        setError("Error al cargar los productos recomendados.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedLocation]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ProductsSection
      title="Productos recomendados"
      products={recommendedProducts}
    />
  );
}
