import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WEIGHTS } from '@/constants/styles.constants';

function Logo() {
  return (
    <LinkWrapper href='/'>
      <Title>E2E Playground</Title>
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--color-primary);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;
export default Logo;
