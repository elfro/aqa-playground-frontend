'use client';

import * as React from 'react';
import styled from 'styled-components';

import ProductCard from '@/components/product-category/ProductCard';
import { QUERIES } from '@/constants/styles.constants';
import { Product } from '@/types/product';

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <Wrapper>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 16px;
  flex: 1;

  ${QUERIES.tabletAndLess} {
    flex: revert;
  }
`;

export default ProductsGrid;
