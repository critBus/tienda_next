"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedCurrency } from "@/store/slices/currencySlice";
import { CurrencyDTO } from "@/types";
import { selectCurrencyData } from "@/store/selectors/currencySelectors";

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { currencies, selectedCurrency, isLoading } =
    useSelector(selectCurrencyData);

  const selectCurrency = (currency: CurrencyDTO) => {
    dispatch(setSelectedCurrency(currency));
    setIsOpen(false);
  };

  const iconExpand = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="relative inline-block text-left">
      {isLoading ? (
        <div className="bg-[#F8F8F8] flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          <span>...</span>
          {iconExpand}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#F8F8F8] flex items-center justify-between 
          w-full px-4 py-2 text-sm font-medium text-gray-700 
          border border-gray-300 rounded-md shadow-sm 
          hover:bg-gray-50 focus:outline-none focus:ring-2 
          focus:ring-offset-2 focus:ring-yellow-500
          hover:cursor-pointer hover:scale-110 hover:border-gray-600 transition-transform duration-200 ease-in-out
          "
        >
          {selectedCurrency?.name || "..."}
          {iconExpand}
        </button>
      )}

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {currencies.map((currency) => (
              <button
                key={currency.id}
                onClick={() => selectCurrency(currency)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedCurrency && currency.id == selectedCurrency.id
                    ? "font-bold text-yellow-600"
                    : "text-gray-700"
                } hover:bg-gray-100`}
              >
                {currency.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
