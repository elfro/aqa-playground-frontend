import * as React from 'react';

import ProductsList from '@/app/products/products-list';

function ProductsPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ProductsList />
    </React.Suspense>
  );
}

export default ProductsPage;
