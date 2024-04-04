import * as React from 'react';

import ProductsGrid from '@/components/product-category/ProductsGrid';

import { getProductCategories, getProducts } from '@/app/api/products/products';
import {
  METADATA_PAGE_DESCRIPTION,
  METADATA_PAGE_TITLE,
} from '@/constants/pages-data.contants';
import { capitalize } from '@/utils/string-helper';
import { Product } from '@/types/product';
import { Category } from '@/types/category';

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categories = await getProductCategories();

  const category = categories.find((category: Category) =>
    category.slug.endsWith(params.categorySlug)
  );

  const title = category ? `${category.title} category` : 'Products';

  return {
    title: `${capitalize(title)} | ${METADATA_PAGE_TITLE}`,
    description: METADATA_PAGE_DESCRIPTION,
  };
}

async function CategoryPage({ params }: CategoryPageProps) {
  const products: Product[] = await getProducts();

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
