"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useProductPrice from "@/hooks/useProductPrice";

import { ProductDetail as ProductDetailType } from "@/types";
import ApiService from "@/service/ApiService";

const ProductDetail = ({ id }: { id: number }) => {
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await ApiService.product.getById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Producto no encontrado.</div>;

  const { convertedPrice, originalPrice, symbol } = useProductPrice(product);

  return (
    <div className="flex flex-col">
      <div className="bg-[#dfd9d9] flex flex-row gap-2 px-3 pt-8 pb-6">
        <div className="w-[20%] flex flex-col gap-2">
          {product.ProductImage.map(({ image, id }) => (
            <Image
              className="block w-full bg-amber-50 rounded-2xl shadow-sm hover:scale-110"
              src={image}
              alt="imagen del producto"
              width={100}
              height={100}
              key={id}
            />
          ))}
        </div>
        <div className="w-[80%]">
          <Image
            className="block w-full h-full"
            src={product.image}
            alt="imagen del producto"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="bg-[#ede8e8] flex flex-col gap-2 p-3">
        <h3 className="roboto underline">{product.company.name}</h3>
        <h1 className="roboto-bold text-2xl">{product.name}</h1>
        <div className="flex flex-row gap-2">
          <span className="font-bold text-[17px]">
            {symbol}{" "}
            {product.discountPercentage
              ? (
                  originalPrice -
                  originalPrice * (product.discountPercentage / 100)
                ).toFixed(2)
              : originalPrice.toFixed(2)}
          </span>
          {product.discountPercentage && (
            <span className="text-sm line-through text-red-500">
              {symbol} {originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        {product.brand && (
          <div className="flex flex-row gap-2 items-center">
            <span className="text-gray-700">Marca:</span>
            <span className="p-2 bg-gray-200 rounded-sm">{product.brand}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
