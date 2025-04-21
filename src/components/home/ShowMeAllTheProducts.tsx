'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ShowMeAllTheProducts() {
  return (
    <div className="my-8 px-4 flex justify-center">
      <Link
        href="/categorias"
        className="inline-flex items-center justify-center gap-1 leading-100% hover:text-gray-900 no-underline py-1 custom-link roboto-condensed-bold"
      >
        <span className="mr-2">Ver todos los productos</span>
        <div className="bg-[#d0cbcb] rounded-full p-1">
          <Image
            src="/assets/categories/Vector.svg"
            alt=""
            width={12}
            height={12}
            className="h-3 w-3 align-middle"
          />
        </div>
      </Link>
    </div>
  );
} 