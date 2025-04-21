'use client';

import ProductsSection from './ProductsSection';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
  freeShipping: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: '/assets/products/img/pomos-de-agua.png',
    freeShipping: true,
  },
  {
    id: 2,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: '/assets/products/img/especias_refinidas.png',
    freeShipping: true,
  },
  {
    id: 3,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: '/assets/products/img/molo_para_piza.png',
    freeShipping: true,
  },
  {
    id: 4,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: '/assets/products/img/pasta_barbicue.png',
    freeShipping: true,
  },
  {
    id: 5,
    name: 'Galletas Integrales con Semillas de Chía sin cáscaras (400 g)',
    price: 232.69,
    originalPrice: 40.69,
    discountPercentage: 10,
    image: '/assets/products/img/rico_drato.png',
    freeShipping: true,
  },
];

export default function LinkingYourPurchases() {
  return <ProductsSection title="Vinculados a tus Compras" products={products} />;
} 