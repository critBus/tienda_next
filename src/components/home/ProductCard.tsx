"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { Product } from "@/types";
import useProductPrice from "@/hooks/useProductPrice";
import { addNotification } from "@/store/slices/notificationSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [showDialog, setShowDialog] = useState(false); // State for dialog visibility
  const dispatch = useDispatch();

  const { originalPrice } = useProductPrice(product);

  const addToCart = () => {
    console.log(`product.ignoreStock ${product.ignoreStock}`);
    console.log(`product.stock ${product.stock}`);
    console.log(`quantity ${quantity}`);
    console.log(`quantity > product.stock ${quantity > product.stock}`);
    if (!product.ignoreStock && quantity > product.stock) {
      // dispatch(
      //   addNotification({
      //     message: "Cantidad excede el stock disponible.",
      //     type: "error",
      //     duration: 3000,
      //   })
      // );
      setShowDialog(true); // Show dialog if quantity exceeds stock
      return;
    }
    dispatch(
      addNotification({
        message: "Producto añadido al carrito.",
        type: "success",
        duration: 3000,
      })
    );
    // Implementar lógica de carrito aquí
    console.log("Añadir al carrito:", product, quantity);
  };

  return (
    <div className="relative w-full h-40 sm:h-80 sm:w-52 inline-block bg-white shadow-md rounded-lg">
      <div className="p-2 h-full flex flex-row sm:flex-col sm:items-center gap-1">
        <div className="relative w-[40%] sm:w-[80%] inline-block">
          <Image
            className="block w-full h-full"
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
          <span className="absolute bottom-0 right-0 px-3 py-1 z-10 bg-[#FAFAFA] bg-opacity-90 text-[#655F5F] text-[10px] font-medium rounded-md">
            {product.company.name}
          </span>
        </div>
        <div className="flex w-[60%] sm:w-full flex-col gap-2">
          <span className="font-semibold text-[#4E4949]">{product.name}</span>
          <div className="flex flex-row gap-2">
            <span className="font-bold text-[17px]">
              {product.discountPercentage
                ? (
                    originalPrice -
                    originalPrice * (product.discountPercentage / 100)
                  ).toFixed(2)
                : originalPrice.toFixed(2)}
            </span>
            {product.discountPercentage && (
              <span className="text-sm line-through text-red-500">
                {originalPrice.toFixed(2)}
              </span>
            )}

            {product.freeShipping && (
              <span className="rounded-sm text-[12px] text-[#0B7B69] bg-[#DBFEE3] p-1">
                Envio Gratis
              </span>
            )}
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row justify-center items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border-2 border-[#E5EAF0] rounded-md px-2 py-1 flex items-center justify-center"
              >
                <Image
                  src="/assets/products/icons/less.svg"
                  alt="Menos"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </button>
              <div className="w-4 bg-[#CFCECE] border-[#CFCECE] border-t-1 border-b-1 h-[60%] flex justify-center items-center">
                <span className="text-[10px] font-bold">{quantity}</span>
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border-2 border-black rounded-md px-2 py-1 flex items-center justify-center"
              >
                <Image
                  src="/assets/products/icons/add.svg"
                  alt="Más"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </button>
            </div>
            <button
              onClick={addToCart}
              className="bg-[#FCD26D] flex flex-row gap-2 items-center justify-center bg-[#F6F6F6] border-2 border-[#E5EAF0] rounded-md px-2 py-1"
            >
              <Image
                src="/assets/products/icons/shopping-cart.svg"
                alt="Carrito"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <span className="text-[#624602]">Añadir</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute sm:mt-2 top-0 left-0 flex flex-col space-y-1 z-10">
        {product.discountPercentage && (
          <div className="bg-[#FBDDE5] px-2.5 py-1 rounded-r-lg shadow flex flex-row items-center justify-center">
            <Image
              src="/assets/products/icons/tag.svg"
              alt="Tag"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span className="text-red-500 text-xs font-bold">
              {" "}
              -{product.discountPercentage}%{" "}
            </span>
          </div>
        )}

        {product.itsNew && (
          <div className="bg-[#FEF4DB] max-sm:w-8 p-1 rounded-r-md shadow flex items-center justify-center">
            <Image
              src="/assets/products/icons/select.svg"
              alt="Nuevo"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span className="max-sm:hidden text-[#AC7B04] text-[12px] font-bold">
              {" "}
              NUEVO{" "}
            </span>
          </div>
        )}

        <div className="sm:hidden bg-[#E5EAF0] w-8 p-1 rounded-r-md shadow flex items-center justify-center">
          <Image
            src="/assets/products/icons/calendar-edit.svg"
            alt="Calendario"
            width={16}
            height={16}
            className="h-4 w-4"
          />
        </div>
      </div>

      <div className="max-sm:hidden absolute sm:mt-2 z-10 top-0 right-0 bg-[#E5EAF0] w-8 p-1 rounded-l-md shadow flex items-center justify-center">
        <Image
          src="/assets/products/icons/calendar-edit.svg"
          alt="Calendario"
          width={16}
          height={16}
          className="h-4 w-4"
        />
      </div>

      {/* Dialog showDialog*/}
      {showDialog && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* <div
            className="fixed inset-0  backdrop-blur-[2px] transition-opacity"
            aria-hidden="true"
          ></div> */}

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <div className="w-[340px] h-[350px] relative bg-white rounded-lg shadow-sm shadow-gray-400/50 overflow-hidden">
                <Image
                  src="/assets/modal_insufficient_stok/close.svg"
                  alt="Close"
                  width={16}
                  height={16}
                  className="h-8 w-8 absolute mt-2 mr-2 top-0 right-0 border-1 border-white
                   hover:border-1 hover:rounded-sm hover:border-black hover:cursor-pointer 
                   hover:shadow-sm hover:shadow-black/50
                   hover:scale-110 transition-all
                   "
                  onClick={() => setShowDialog(false)}
                />

                <div className="h-full w-full flex flex-col bg-white">
                  <div className=" flex  items-center justify-center">
                    <Image
                      src="/assets/modal_insufficient_stok/productos_insuficientes.svg"
                      alt="productos_insuficientes"
                      width={124}
                      height={119}
                      className="h-[119px] w-[124px] mt-6"
                    />
                  </div>
                  <div className="flex flex-col mx-6 text-center">
                    <span className="roboto-bold mt-6">
                      Cantidad de productos insuficientes
                    </span>
                    <span className="roboto mx-6 mt-2 text-[#7A7474] text-[12px]">
                      Solo quedan 4 unidades del producto que está solicitando
                      ¿Desea añadir al carrito las 4 unidades que quedan?
                    </span>
                    <div className="flex flex-wrap flex-row gap-4 h-[48px]">
                      {/* px-6 py-2 */}
                      <button
                        className="text-[12px] h-full grow roboto-bold 
                      border-[0.5px] border-[#908B8B] rounded-md  flex items-center 
                      justify-center mt-6 hover:scale-110 transition-all hover:cursor-pointer"
                        onClick={() => setShowDialog(false)}
                      >
                        Cancelar
                      </button>
                      <button
                        className="text-[12px] text-white bg-[#4F6A8E] h-full grow 
                        roboto-bold border-[0.5px] border-[#908B8B] rounded-md  
                        flex items-center justify-center mt-6
                        hover:scale-110 transition-all hover:cursor-pointer
                        "
                        onClick={() => setShowDialog(false)}
                      >
                        Sí, añadir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
