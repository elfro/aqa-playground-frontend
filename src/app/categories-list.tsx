import * as React from 'react';

import CategoriesList from '@/components/CategoriesList';
import { getProductCategories } from '@/api/auth/products';

async function Categories() {
  const links = await getProductCategories();

  if (!Array.isArray(links)) {
    return <div>No categories found</div>;
  }

  return <CategoriesList links={links} />;
}

export default Categories;
