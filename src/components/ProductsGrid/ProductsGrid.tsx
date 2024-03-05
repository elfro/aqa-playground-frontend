'use client';

import * as React from 'react';
import styled from 'styled-components';

import ProductCard, { IProduct } from '@/components/ProductCard';

function ProductsGrid({ products }: { products: IProduct[] }) {
  return (
    <Wrapper>
      {products.map((p: { [key: string]: string | number }) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 16px;
`;

export default ProductsGrid;
