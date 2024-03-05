import React from 'react';

import Sidebar from '@/components/Sidebar';
import ProductsWrapper from '@/components/ProductsWrapper';

function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ProductsWrapper>
        <Sidebar />
        {children}
      </ProductsWrapper>
    </main>
  );
}

export default ProductsLayout;
