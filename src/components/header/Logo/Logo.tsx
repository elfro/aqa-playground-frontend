import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WEIGHTS } from '@/constants/styles.constants';
import { METADATA_PAGE_TITLE } from '@/constants/pages-data.contants';

function Logo() {
  return (
    <LinkWrapper href='/'>
      <Title>{METADATA_PAGE_TITLE}</Title>
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--color-primary);
`;

const Title = styled.h1`
  color: inherit;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;
export default Logo;
