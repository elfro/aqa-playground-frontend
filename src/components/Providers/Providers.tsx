import * as React from 'react';

import StyledComponentsRegistry from '@/lib/registry';
import UserProvider from '@/components/UserProvider';
import CartProvider from '@/components/CartProvider';

function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <UserProvider>
        <CartProvider>{props.children}</CartProvider>
      </UserProvider>
    </StyledComponentsRegistry>
  );
}

export default Providers;
