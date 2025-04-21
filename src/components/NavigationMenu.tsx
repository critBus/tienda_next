'use client';

import Image from 'next/image';

export default function NavigationMenu() {
  return (
    <div className="max-sm:hidden bg-[#E5EAF0] h-12 flex flex-row text-[#7A7474] text-sm roboto gap-5 justify-center items-center">
      <button type="button" className="hover:text-black text-[#405774]">
        Inicio
      </button>
      <button type="button" className="hover:text-black">
        Todos los productos
      </button>
      <button type="button" className="hover:text-black">
        Tiendas
      </button>
      <button type="button" className="flex flex-row hover:text-black">
        <span>Categorías</span>
        <Image
          src="/assets/navigation_desk/icons/arrow-right.svg"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </button>
      <button type="button" className="hover:text-black">
        Vende con Nosotros
      </button>
      <button type="button" className="hover:text-black">
        Contáctenos
      </button>
      <button type="button" className="hover:text-black">
        Preguntas frecuentes
      </button>
    </div>
  );
} 