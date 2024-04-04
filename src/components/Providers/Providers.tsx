import * as React from 'react';

// import { SessionProvider } from 'next-auth/react';
import StyledComponentsRegistry from '@/lib/registry';
import CartProvider from '@/components/Providers/CartProvider';

async function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      {/*<SessionProvider>*/}
      <CartProvider>{props.children}</CartProvider>
      {/*</SessionProvider>*/}
    </StyledComponentsRegistry>
  );
}

export default Providers;
