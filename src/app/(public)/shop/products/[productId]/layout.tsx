import React from 'react';

import MainSection from '@/components/layout-wrappers/MainSection';

function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainSection>{children}</MainSection>;
}

export default ProductsLayout;
