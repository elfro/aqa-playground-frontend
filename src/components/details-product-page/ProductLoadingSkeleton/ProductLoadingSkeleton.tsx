'use client';

import * as React from 'react';
import styled from 'styled-components';

import Spinner from '@/components/ui/Spinner';
import MaxWidthWrapper from '@/components/layout-wrappers/MaxWidthWrapper';

function ProductLoadingSkeleton() {
  return (
    <Wrapper>
      <Spinner size={48} />
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  height: 60svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProductLoadingSkeleton;
