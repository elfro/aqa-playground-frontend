import * as React from 'react';

import Categories from '@/app/categories-list';
import Spinner from '@/components/Spinner';

function Sidebar() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Categories />
    </React.Suspense>
  );
}

export default Sidebar;
