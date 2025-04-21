'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShowMeAllTheProducts from './ShowMeAllTheProducts';

interface Category {
  id: string;
  name: string;
  imageFile: string;
  link: string;
}

const all_categories: Category[] = [
  { id: 'carnicos', name: 'Cárnicos', imageFile: 'carnicos.png', link: '/categorias/carnicos' },
  {
    id: 'pescados',
    name: 'Pescados y Mariscos',
    imageFile: 'pescados y mariscos.png',
    link: '/categorias/pescados',
  },
  {
    id: 'huevos',
    name: 'Huevos y Lácteos',
    imageFile: 'huevos.png',
    link: '/categorias/huevos',
  },
  {
    id: 'agro',
    name: 'Del Agro',
    imageFile: 'del agro.png',
    link: '/categorias/agro',
  },
  {
    id: 'ferreteria',
    name: 'Ferretería',
    imageFile: 'ferreteria.png',
    link: '/categorias/ferreteria',
  },
  {
    id: 'helados',
    name: 'Cakes, Helados y Dulces',
    imageFile: 'helados.png',
    link: '/categorias/ferreteria',
  },
  {
    id: 'infantiles',
    name: 'Infantiles y Escolares',
    imageFile: 'infantiles y escolares.png',
    link: '/categorias/infantiles',
  },
  { id: 'bebidas', name: 'Bebidas', imageFile: 'bebidas.png', link: '/categorias/bebidas' },
  { id: 'farmacia', name: 'Farmacia', imageFile: 'farmacia.png', link: '/categorias/farmacia' },
  { id: 'buffet', name: 'Buffet', imageFile: 'buffet.png', link: '/categorias/buffet' },
  {
    id: 'electro',
    name: 'Electro',
    imageFile: 'electrodomesticos.png',
    link: '/categorias/electro',
  },
];

function CategoryImageLink({ category }: { category: Category }) {
  return (
    <Link href={category.link} className="flex flex-col items-center m-2">
      <div className="w-24 h-24 relative">
        <Image
          src={`/assets/categories/${category.imageFile}`}
          alt={category.name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <span className="mt-2 text-sm text-center">{category.name}</span>
    </Link>
  );
}

export default function CategoryNavigation() {
  const [rowCategories] = useState(() => {
    const rows = [];
    for (let i = 0; i < all_categories.length; i += 4) {
      rows.push({
        id: `row-${i}`,
        categories: all_categories.slice(i, i + 4),
      });
    }
    return rows;
  });

  return (
    <div className="overflow-visible">
      {/* Versión móvil */}
      <div className="sm:hidden ml-4 overflow-visible">
        {rowCategories.map((rowCategory) => (
          <div
            key={rowCategory.id}
            className="sm:hidden flex overflow-x-auto whitespace-nowrap gap-1 overflow-visible scrollbar-hide"
          >
            {rowCategory.categories.map((category) => (
              <CategoryImageLink key={category.id} category={category} />
            ))}
          </div>
        ))}
        <ShowMeAllTheProducts />
      </div>

      {/* Versión desktop */}
      <div className="max-sm:hidden mt-3 flex flex-col items-center justify-center">
        <div className="flex flex-row flex-wrap max-sm:h-52">
          {all_categories.map((category) => (
            <CategoryImageLink key={category.id} category={category} />
          ))}
        </div>
        <ShowMeAllTheProducts />
      </div>
    </div>
  );
} 