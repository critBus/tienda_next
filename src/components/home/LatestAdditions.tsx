"use client";
import { useEffect, useState } from "react";

import ProductsSection from "./ProductsSection";
import { Product } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ApiService from "@/service/ApiService";

export default function LatestAdditions() {
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
        const productsResponse = await ApiService.product.latestAdditions(
          selectedLocation
        );
        setProducts(productsResponse);
      } catch {
        setError("Error al cargar los productos mas nuevos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedLocation]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;
  return <ProductsSection title="Últimos Añadidos" products={products} />;
}
