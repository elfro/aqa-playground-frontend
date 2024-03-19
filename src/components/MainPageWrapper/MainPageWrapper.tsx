'use client';

import * as React from 'react';
import styled from 'styled-components';

function MainPageWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  isolation: isolate;
`;

export default MainPageWrapper;
