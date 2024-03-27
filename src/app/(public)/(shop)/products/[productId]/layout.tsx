import React from 'react';

import Sidebar from '@/components/Sidebar';
import ProductsWrapper from '@/components/ProductsWrapper';
import MainSection from '@/components/MainSection';

function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainSection>
      <ProductsWrapper>{children}</ProductsWrapper>
    </MainSection>
  );
}

export default ProductsLayout;
