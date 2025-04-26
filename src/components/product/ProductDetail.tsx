"use client";
import React, { useState } from "react";
import Image from "next/image";
import useProductPrice from "@/hooks/useProductPrice";
import { Price, Currency } from "../../app/generated/prisma/index";
const ProductDetail = ({ id }: { id: number }) => {
  const [product, setProduct] = useState({
    id: id,
    name: "Cerveza Premium",
    description: "Cerveza artesanal de alta calidad",
    priceBaseCurrency: 5.99,
    priceBaseDiscount: 4,
    stock: 50,
    image: "/assets/products/img/cerveza.png",
    discountPercentage: 10,
    itsNew: true,
    freeShipping: false,
    brand: "La Marca",
    company: { id: 1, name: "Distribuidora Nacional" },
    images: [
      {
        id: 1,
        image: "/assets/products/img/cerveza.png",
      },
      {
        id: 2,
        image: "/assets/products/img/cerveza.png",
      },
      {
        id: 3,
        image: "/assets/products/img/cerveza.png",
      },
    ],
    Price: [
      {
        id: 1,
        productId: 1,
        currencyId: 1,
        value: 125,
        isFixed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        currency: {
          id: 1,
          name: "GBP",
          baseRate: 0.8,
          isDefault: false,
          isBase: false,
        },
      },
    ],
  });
  const { convertedPrice, originalPrice, symbol } = useProductPrice(product);
  return (
    <div className="flex flex-col">
      <div className="bg-[#dfd9d9] flex flex-row gap-2 px-3 pt-8 pb-6">
        <div className="w-[20%] flex flex-col gap-2">
          {product.images.map(({ image, id }) => (
            <Image
              className="block w-full  bg-amber-50 rounded-2xl shadow-sm 
            hover:scale-110"
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
            key={id}
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
