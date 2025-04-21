'use client';

import Image from 'next/image';

interface ButtonData {
  icon: string;
  name: string;
  selected: boolean;
}

const buttons: ButtonData[] = [
  {
    icon: '/assets/cell_phone_navigation/icons/menu.svg',
    name: 'Menú',
    selected: false,
  },
  {
    icon: '/assets/cell_phone_navigation/icons/shop.svg',
    name: 'Tiendas',
    selected: true,
  },
  {
    icon: '/assets/cell_phone_navigation/icons/products.svg',
    name: 'Productos',
    selected: false,
  },
  {
    icon: '/assets/cell_phone_navigation/icons/shopping-cart.svg',
    name: 'Carrito',
    selected: false,
  },
  {
    icon: '/assets/cell_phone_navigation/icons/profile.svg',
    name: 'Perfil',
    selected: false,
  },
];

export default function CellPhoneNavigation() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {buttons.map((menu_button) => (
          <button
            key={menu_button.name}
            type="button"
            className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 ${
              menu_button.selected ? 'bg-[#FEE9B6]' : ''
            }`}
          >
            <Image
              src={menu_button.icon}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 mb-2 group-hover:text-blue-600"
            />
            <span
              className={`text-sm group-hover:text-blue-600 ${
                menu_button.selected ? 'text-[#624602]' : 'text-gray-500'
              }`}
            >
              {menu_button.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
} 