import * as React from 'react';
import { range } from '@/helpers/range-helper';
import ProductsGridWrapper from '@/components/product-category/ProductsGridWrapper';
import ProductCardLoadingSkeleton from '@/components/product-category/ProductCardLoadingSkeleton';

function ProductCategoryLoadingSkeleton() {
  return (
    <ProductsGridWrapper>
      {range(12).map((i) => (
        <ProductCardLoadingSkeleton key={i} />
      ))}
    </ProductsGridWrapper>
  );
}

export default ProductCategoryLoadingSkeleton;
