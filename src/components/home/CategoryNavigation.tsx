"use client";

import { useState, useEffect } from "react";

import ShowMeAllTheProducts from "./ShowMeAllTheProducts";
import CategoryImageLink from "./CategoryImageLink";
import "./CategoryNavigation.css";
import ApiService from "@/service/ApiService";
import { Category } from "@/types";
import CategorySectionSkeleton from "../common/loaders/CategorySectionSkeleton";

interface RowCategory {
  id: string;
  categories: Category[];
}

export default function CategoryNavigation() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rowCategories, setRowCategories] = useState<RowCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await ApiService.category.all();
        // console.log("pide las categorias");
        // console.log(categories);
        setCategories(categories);

        const rows = [];
        const max = 4;
        for (let i = 0; i < categories.length; i += max) {
          const row_categories = [];
          for (let j = i; j < max; j++) {
            row_categories.push(categories[j]);
          }
          rows.push({
            id: `row-${i}`,
            categories: row_categories, // categories.slice(i, i + 4),
          });
        }
        setRowCategories(rows);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <CategorySectionSkeleton />;
  }

  return (
    <div className="overflow-visible">
      {/* Versión móvil */}
      <div className="sm:hidden ml-4 overflow-visible">
        {rowCategories.map((rowCategory) => (
          <div
            key={rowCategory.id}
            className="sm:hidden flex overflow-x-auto whitespace-nowrap gap-1 overflow-visible scrollbar-hide"
          >
            {rowCategory.categories.map((category) => (
              <CategoryImageLink
                key={category.id}
                img={category.image || ""}
                name={category.name}
              />
            ))}
          </div>
        ))}
        <ShowMeAllTheProducts />
      </div>

      {/* Versión desktop */}
      <div className="max-sm:hidden mt-3 flex flex-col items-center justify-center">
        <div className="flex flex-row flex-wrap max-sm:h-52">
          {categories.map((category) => (
            <CategoryImageLink
              key={category.id}
              img={category.image || ""}
              name={category.name}
            />
          ))}
        </div>
        <ShowMeAllTheProducts />
      </div>
    </div>
  );
}
