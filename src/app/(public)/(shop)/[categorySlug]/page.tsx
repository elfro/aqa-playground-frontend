import * as React from 'react';

import { IProduct } from '@/components/ProductCard';
import ProductsGrid from '@/components/ProductsGrid';

import { getProducts } from '@/app/api/products/products';

async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const products: IProduct[] = await getProducts();
  const filteredProducts =
    params.categorySlug === 'products'
      ? products
      : products.filter((p) => p.category.slug === params.categorySlug);

  if (filteredProducts.length === 0) {
    return <div>There are no products in this category</div>;
  }

  return <ProductsGrid products={filteredProducts} />;
}

export default CategoryPage;
