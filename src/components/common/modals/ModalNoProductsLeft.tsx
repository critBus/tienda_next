import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
interface ModalProps {
  isOpen: boolean; // Indica si el modal está abierto o cerrado
  setIsOpen: (isOpen: boolean) => void; // Función para cambiar el estado del modal
}
const ModalNoProductsLeft = ({ isOpen, setIsOpen }: ModalProps) => {
  const t = useTranslations("ModalNoProductsLeft");
  return (
    <div>
      {isOpen && (
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
                  onClick={() => setIsOpen(false)}
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
                    <span className="roboto-bold mt-6">{t("title")}</span>
                    <span className="roboto mx-6 mt-2 text-[#7A7474] text-[12px]">
                      {t("description")}
                    </span>
                    <div className="flex flex-wrap flex-row gap-4 h-[48px]">
                      {/* px-6 py-2 */}
                      <button
                        className="text-[12px] h-full grow roboto-bold 
                border-[0.5px] border-[#908B8B] rounded-md  flex items-center 
                justify-center mt-6 hover:scale-110 transition-all hover:cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("cancel")}
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
};

export default ModalNoProductsLeft;
