'use client';

import Image from 'next/image';

interface InfoShippingProps {
  icono: string;
  title: string;
  contenct: string;
}

export default function InfoShipping({ icono, title, contenct }: InfoShippingProps) {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="bg-[#FEF4DB] mb-2 flex items-center justify-center p-3 rounded-full">
        <Image src={icono} alt="Tag" width={40} height={40} />
      </div>

      <span className="roboto-bold font-bold text-xl mb-1">{title}</span>
      <span className="roboto f text-base">{contenct}</span>
    </div>
  );
} 