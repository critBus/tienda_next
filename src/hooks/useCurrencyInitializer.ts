"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ApiService from "@/service/ApiService";
import {
  setCurrencies,
  setLoading,
  setError,
} from "@/store/slices/currencySlice";

export function useCurrencyInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeCurrencies = async () => {
      try {
        dispatch(setLoading(true));
        const response = await ApiService.currency.all();
        dispatch(setCurrencies(response));
      } catch (error) {
        dispatch(setError("Error al cargar las monedas"));
        console.error("Error al inicializar monedas:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    initializeCurrencies();
  }, []); // Removemos dispatch de las dependencias ya que es estable
}
