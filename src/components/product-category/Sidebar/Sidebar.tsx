import * as React from 'react';

import Spinner from '@/components/ui/Spinner';
import CategoriesList from '@/components/product-category/CategoriesList';

import { getProductCategories } from '@/app/api/products/products';

async function Sidebar() {
  const links = await getProductCategories();

  if ('error' in links) {
    return;
  }

  return (
    <React.Suspense fallback={<Spinner />}>
      <CategoriesList links={links} />
    </React.Suspense>
  );
}

export default Sidebar;
