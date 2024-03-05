'use client';

import styled from 'styled-components';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

import { QUERIES } from '@/constants';

const ProductsWrapper = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 16px;
  align-content: center;

  ${QUERIES.tabletAndLess} {
    grid-template-columns: 1fr;
  }
`;

export default ProductsWrapper;
