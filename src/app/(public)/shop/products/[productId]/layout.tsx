import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import Error from '@/components/Error';
import MainSection from '@/components/layout-wrappers/MainSection';

function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary
      fallback={
        <Error
          imgSrc='/not-found.svg'
          imgAlt='Not found'
          title='Ooops...'
          description='Product not found'
          buttonTitle='Go back'
        />
      }
    >
      <MainSection>{children}</MainSection>
    </ErrorBoundary>
  );
}

export default ProductsLayout;
