'use client';

import ProductCard from './ProductCard';
import ShowMeAllTheProducts from './ShowMeAllTheProducts';

interface Product {
  id: number | string;
  name: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  freeShipping?: boolean;
}

interface ProductsSectionProps {
  title: string;
  products: Product[];
  gray_background?: boolean;
}

export default function ProductsSection({
  title,
  products,
  gray_background = true,
}: ProductsSectionProps) {
  return (
    <section className={gray_background ? 'bg-[#F8F8F8]' : 'bg-white'}>
      <div className="pt-6 pb-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <h2 className="text-2xl sm:text-3xl roboto-bold mb-8 text-center md:text-left">
          {title}
        </h2>

        {/* Lista de productos */}
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            No hay productos para mostrar en esta sección.
          </div>
        )}

        <ShowMeAllTheProducts />
      </div>
    </section>
  );
} 