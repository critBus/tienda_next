'use client';

import Image from 'next/image';
import InfoShipping from './InfoShipping';

interface Info {
  icono: string;
  title: string;
  contenct: string;
  last: boolean;
}

const infos: Info[] = [
  {
    icono: '/assets/shipping_cuba/group.svg',
    title: 'Entrega rápida',
    contenct: 'Nos aseguramos de que su entrega llegue en el menor tiempo posible.',
    last: false,
  },
  {
    icono: '/assets/shipping_cuba/bag.svg',
    title: 'Variedad de productos',
    contenct: 'Contamos con una amplia y completa variedad de productos.',
    last: false,
  },
  {
    icono: '/assets/shipping_cuba/location-tick.svg',
    title: 'Envíos a toda Cuba',
    contenct: 'Contamos con servicios de entrega a lo largo y ancho de la isla.',
    last: true,
  },
];

export default function ShippingCuba() {
  return (
    <div className="flex flex-col px-2 lg:mt-6 lg:mb-16 pt-10 text-center roboto-condensed-bold">
      <h3 className="mx-2 mt-2 text-xl lg:text-3xl text-[#D09504] font-bold">
        Más de 1500 productos en el almacén
      </h3>
      <h1 className="mx-2 mt-2 mb-8 text-5xl lg:text-7xl font-bold">
        Envíos hacia toda Cuba
      </h1>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="lg:flex lg:flex-row max-w-[1100px]">
          {infos.map((item, index) => (
            <div key={index} className="lg:flex lg:flex-row">
              <InfoShipping
                icono={item.icono}
                title={item.title}
                contenct={item.contenct}
              />
              {!item.last && (
                <div className="max-lg:hidden inline-block h-[70%] mx-8 min-h-[1em] w-0.5 self-stretch bg-[#CFCECE]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 