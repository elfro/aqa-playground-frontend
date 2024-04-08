'use client';

import * as React from 'react';
import MaxWidthWrapper from '@/components/layout-wrappers/MaxWidthWrapper';
import Spinner from '@/components/ui/Spinner';
import styled from 'styled-components';

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
