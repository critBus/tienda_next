"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Product } from "@/types";
import useProductPrice from "@/hooks/useProductPrice";
import { addNotification } from "@/store/slices/notificationSlice";
import { addToCart as addToCartAction } from "@/store/slices/cartSlice";
import { selectProductStockInfo } from "@/store/selectors/productStockSelectors";
import ModalInsufficientProducts from "../common/modals/ModalInsufficientProducts";
import ModalNoProductsLeft from "../common/modals/ModalNoProductsLeft";
import Tooltip from "../common/Tooltip";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [forceTooltipPlus, setForceTooltipPlus] = useState(false);
  const [forceTooltipLess, setForceTooltipLess] = useState(false);
  const [forceTooltipAddCart, setForceTooltipAddCart] = useState(false);
  const [showDialogInsufficient, setShowDialogInsufficient] = useState(false); // State for dialog visibility
  const [showDialogNotLeft, setShowDialogNotLeft] = useState(false); // State for dialog visibility
  const dispatch = useDispatch();

  const { originalPrice } = useProductPrice(product);
  const stockInfo = useSelector((state: any) =>
    selectProductStockInfo(state.cart, product.id, product.stock)
  );

  const isAddDisabled =
    !stockInfo.isAvailable || quantity > stockInfo.remainingStock;
  const isLessDisabled = !stockInfo.isAvailable || quantity <= 1;

  const tryAddingToCart = () => {
    console.log(`product.ignoreStock ${product.ignoreStock}`);
    console.log(`product.stock ${product.stock}`);
    console.log(`quantity ${quantity}`);
    console.log(`quantity > product.stock ${quantity > product.stock}`);
    if (!product.ignoreStock && quantity > product.stock) {
      if (product.stock == 0) {
        setShowDialogNotLeft(true);
        return;
      }
      setShowDialogInsufficient(true); // Show dialog if quantity exceeds stock
      return;
    }
    addToCart();
  };
  const addToCart = () => {
    dispatch(
      addToCartAction({
        product,
        quantity,
      })
    );
    dispatch(
      addNotification({
        message: "Producto añadido al carrito.",
        type: "success",
        duration: 3000,
      })
    );
    console.log("Añadir al carrito:", product, quantity);
  };
  //sm:h-[50%] sm:h-80
  return (
    <div className="relative w-full max-sm:h-40  sm:w-52 inline-block bg-white shadow-md rounded-lg">
      <div className="sm:place-content-between p-2 h-full flex flex-row sm:flex-col sm:items-center gap-1">
        <div className="sm:h-[50%] relative w-[40%] sm:w-[80%] inline-block">
          <Image
            className="block w-full h-full sm:h-40"
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
          <span className="absolute bottom-0 right-0 px-3 py-1 z-10 bg-[#FAFAFA] bg-opacity-90 text-[#655F5F] text-[10px] font-medium rounded-md">
            {product.company.name}
          </span>
        </div>
        <div className=" sm:place-content-between max-sm:justify-center flex w-[60%]  sm:w-full flex-col gap-2">
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
              <Tooltip
                text="No se puede restar mas"
                showTooltip={isLessDisabled}
                forceVisible={forceTooltipLess}
              >
                <button
                  onClick={() => {
                    if (!isLessDisabled) {
                      setQuantity(Math.max(1, quantity - 1));
                    } else {
                      setForceTooltipLess(true);
                      setTimeout(() => {
                        setForceTooltipLess(false);
                      }, 3000);
                      // console.log("va a mostrar el tooltip");
                    }
                  }}
                  className={`border-2  rounded-md px-2 py-1 flex items-center justify-center ${
                    isLessDisabled
                      ? "border-[#9e9d9b] cursor-not-allowed"
                      : "hover:scale-110 border-black"
                  }`}
                >
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M4 7L11 7"
                      stroke={isLessDisabled ? "#9e9d9b" : "#000000"}
                      strokeWidth="1.3125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Tooltip>

              <div className="w-4 bg-[#CFCECE] border-[#CFCECE] border-t-1 border-b-1 h-[60%] flex justify-center items-center">
                <span className="text-[10px] font-bold">{quantity}</span>
              </div>
              <Tooltip
                text="No se puede agregar mas"
                showTooltip={isAddDisabled}
                forceVisible={forceTooltipPlus}
              >
                <button
                  onClick={() => {
                    if (!isAddDisabled) {
                      setQuantity(quantity + 1);
                    } else {
                      setForceTooltipPlus(true);
                      setTimeout(() => {
                        setForceTooltipPlus(false);
                      }, 3000);
                      console.log("va a mostrar el tooltip");
                    }
                  }}
                  className={` border-2   rounded-md px-2 py-1 flex items-center justify-center
                     ${
                       isAddDisabled
                         ? "cursor-not-allowed  border-[#9e9d9b]"
                         : "hover:scale-110 border-black"
                     }`}
                >
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M4 7L11 7"
                      stroke={isAddDisabled ? "#9e9d9b" : "#000000"}
                      strokeWidth="1.3125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 10.5L7.5 3.5"
                      stroke={isAddDisabled ? "#9e9d9b" : "#000000"}
                      strokeWidth="1.3125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Tooltip>
            </div>
            <Tooltip
              text="No se puede agregar mas"
              showTooltip={isAddDisabled}
              forceVisible={forceTooltipAddCart}
            >
              <button
                onClick={() => {
                  if (!isAddDisabled) {
                    tryAddingToCart();
                  } else {
                    setForceTooltipAddCart(true);
                    setTimeout(() => {
                      setForceTooltipAddCart(false);
                    }, 3000);
                    console.log("va a mostrar el tooltip");
                  }
                }}
                className={`  flex flex-row gap-2 items-center justify-center   border-2 border-[#E5EAF0] rounded-md px-2 py-1 ${
                  isAddDisabled
                    ? "opacity-50 cursor-not-allowed bg-[#9e9d9b]"
                    : "bg-[#FCD26D]"
                }`}
              >
                <Image
                  src="/assets/products/icons/shopping-cart.svg"
                  alt="Carrito"
                  width={16}
                  height={16}
                />

                <span className="text-[#624602]">Añadir</span>
              </button>
            </Tooltip>
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
      <ModalInsufficientProducts
        isOpen={showDialogInsufficient}
        setIsOpen={setShowDialogInsufficient}
        stock={product.stock}
        yesAdd={addToCart}
      />
      <ModalNoProductsLeft
        isOpen={showDialogNotLeft}
        setIsOpen={setShowDialogNotLeft}
      />
    </div>
  );
}
