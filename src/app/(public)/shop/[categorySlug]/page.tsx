import * as React from 'react';

import { notFound } from 'next/navigation';

import ProductsGrid from '@/components/product-category/ProductsGrid';

import { getProductCategories, getProducts } from '@/app/api/products/products';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { capitalize } from '@/utils/string-helper';
import {
  METADATA_PAGE_DESCRIPTION,
  METADATA_PAGE_TITLE,
} from '@/constants/pages-data.contants';

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  try {
    const categories = await getProductCategories();

    if ('error' in categories) {
      notFound();
    }

    const category = categories.find((category: Category) =>
      category.slug.endsWith(params.categorySlug)
    );

    const title = `${category?.title} products` || 'Products';

    return {
      title: `${capitalize(title)} | ${METADATA_PAGE_TITLE}`,
      description: METADATA_PAGE_DESCRIPTION,
    };
  } catch (e) {
    return {
      title: `500 | ${METADATA_PAGE_TITLE}`,
      description: METADATA_PAGE_DESCRIPTION,
    };
  }
}

async function CategoryPage({ params }: CategoryPageProps) {
  const products: Product[] = await getProducts();

  if ('error' in products) {
    return <div>There are no products in this category</div>;
  }

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
