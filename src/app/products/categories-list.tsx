import * as React from 'react';

import CategoriesList from '@/components/CategoriesList';
import { getProductCategories } from '@/api/products/products';

async function Categories() {
  const links = await getProductCategories();

  if (!Array.isArray(links)) {
    return <div>No categories found</div>;
  }

  const linksAndAll = [...links, { title: 'All', slug: '/products' }];

  return <CategoriesList links={linksAndAll} />;
}

export default Categories;
