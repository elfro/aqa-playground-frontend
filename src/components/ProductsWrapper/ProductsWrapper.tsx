'use client';

import styled from 'styled-components';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

import { QUERIES } from '@/constants/styles.constants';

const ProductsWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  height: 100%;

  ${QUERIES.tabletAndLess} {
    flex-direction: column;
    align-items: center;
    gap: revert;
  }
`;

export default ProductsWrapper;
