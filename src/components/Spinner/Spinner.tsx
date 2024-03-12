'use client';

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { IconProps, Loader } from 'react-feather';

function Spinner({ color, size }: IconProps) {
  return (
    <Wrapper>
      <Loader color={color} size={size} />
    </Wrapper>
  );
}

const spin = keyframes`
  from {
    transform: rotate(-360deg);
  }
`;

const Wrapper = styled.div`
  display: block;
  width: min-content;
  height: min-content;
  animation: ${spin} 1000ms linear infinite;
  opacity: 0.6;
  margin: 0 auto;

  & svg {
    display: block;
    max-width: revert;
  }
`;

export default Spinner;
