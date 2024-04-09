'use client';

import * as React from 'react';

import ProductCard from '@/components/product-category/ProductCard';
import ProductsGridWrapper from '@/components/product-category/ProductsGridWrapper';

import { Product } from '@/types/product';

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ProductsGridWrapper>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ProductsGridWrapper>
  );
}

export default ProductsGrid;
