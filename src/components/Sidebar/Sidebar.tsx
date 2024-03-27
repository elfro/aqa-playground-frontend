import * as React from 'react';

import Spinner from '@/components/Spinner';
import CategoriesList from '@/components/CategoriesList';

import { getProductCategories } from '@/app/api/products/products';

async function Sidebar() {
  const links = await getProductCategories();

  if (!Array.isArray(links)) {
    return <div>No categories found</div>;
  }

  const linksAndAll = [...links, { title: 'All', slug: '/products' }];

  return (
    <React.Suspense fallback={<Spinner />}>
      <CategoriesList links={linksAndAll} />
    </React.Suspense>
  );
}

export default Sidebar;
