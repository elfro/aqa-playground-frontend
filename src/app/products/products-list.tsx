import * as React from 'react';

import { getProducts } from '@/api/products/products';
import ProductsGrid from '@/components/ProductsGrid';

async function ProductsList() {
  const products = await getProducts();

  if (!Array.isArray(products)) {
    return <div>There are no products</div>;
  }

  return <ProductsGrid products={products} />;
}

export default ProductsList;
