import * as React from 'react';

import StyledComponentsRegistry from '@/lib/registry';
import CartProvider from '@/components/Providers/CartProvider';

async function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <CartProvider>{props.children}</CartProvider>
    </StyledComponentsRegistry>
  );
}

export default Providers;
