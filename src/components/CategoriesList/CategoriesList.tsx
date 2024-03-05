'use client';

import * as React from 'react';
import styled from 'styled-components';

import { QUERIES, WEIGHTS } from '@/constants';

function CategoriesList({ links }: { links: string[] }) {
  return (
    <Wrapper>
      {links.map((link, index) => (
        <SidebarLink key={index} href={`/${link}`}>
          {link}
        </SidebarLink>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  ${QUERIES.tabletAndLess} {
    display: none;
  }

  background-color: var(--color-white);
  border-radius: 16px 16px 4px 4px;
  padding: 20px;
`;

const SidebarLink = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);
  line-height: 2;

  &:focus {
    outline-offset: 5px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default CategoriesList;
