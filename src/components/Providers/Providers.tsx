import * as React from 'react';

import StyledComponentsRegistry from '@/app/lib/registry';

function Providers(props: React.PropsWithChildren) {
  return <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>;
}

export default Providers;
