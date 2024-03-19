import * as React from 'react';

import Categories from '@/app/products/categories-list';
import Spinner from '@/components/Spinner';

function Sidebar() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Categories />
    </React.Suspense>
  );
}

export default Sidebar;
