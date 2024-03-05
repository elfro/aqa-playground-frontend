import * as React from 'react';

import StyledComponentsRegistry from '@/lib/registry';
import UserProvider from '@/components/UserProvider';

function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <UserProvider>{props.children}</UserProvider>
    </StyledComponentsRegistry>
  );
}

export default Providers;
