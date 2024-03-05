'use client';

import * as React from 'react';
import styled from 'styled-components';

function MainPageWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export default MainPageWrapper;
