import * as React from 'react';

import { IProduct } from '@/components/ProductCard';
import ProductsGrid from '@/components/ProductsGrid';

import { getProducts } from '@/api/products/products';

async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const currentCategory = params.categorySlug;

  const products: IProduct[] = await getProducts();
  const categoryProducts = products.filter(
    (p) => p.category.slug === currentCategory
  );

  if (!Array.isArray(categoryProducts)) {
    return <div>There are no products in this category</div>;
  }

  return <ProductsGrid products={categoryProducts} />;
}

export default CategoryPage;
