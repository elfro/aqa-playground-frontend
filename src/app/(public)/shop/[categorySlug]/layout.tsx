import React from 'react';

import Sidebar from '@/components/product-category/Sidebar';
import ProductsWrapper from '@/components/product-category/ProductsWrapper';
import MainSection from '@/components/layout-wrappers/MainSection';

function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainSection>
      <ProductsWrapper>
        <Sidebar />
        {children}
      </ProductsWrapper>
    </MainSection>
  );
}

export default ProductsLayout;
