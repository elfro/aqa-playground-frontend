'use client';

import * as React from 'react';
import styled from 'styled-components';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { QUERIES, WEIGHTS } from '@/constants/styles.constants';

function CategoriesList({
  links,
}: {
  links: { title: string; slug: string }[];
}) {
  const currentPathname = usePathname();

  return (
    <Wrapper>
      <StickySidebar>
        {links.map((link, index) => (
          <SidebarLink
            key={index}
            href={link.slug}
            $active={currentPathname === link.slug}
          >
            {link.title}
          </SidebarLink>
        ))}
      </StickySidebar>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  ${QUERIES.tabletAndLess} {
    display: none;
  }
  position: relative;
  background-color: var(--color-white);
  border-radius: 16px 16px 4px 4px;
  padding: 20px;
  z-index: 1;
  flex-basis: 248px;
  align-self: stretch;

  ${QUERIES.tabletAndLess} {
    flex-basis: revert;
  }
`;

const StickySidebar = styled.div`
  position: sticky;
  top: var(--header-height);
`;

const SidebarLink = styled(Link)<{ $active: boolean }>`
  display: block;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: ${WEIGHTS.medium};
  color: var(
    --${(props) => (props.$active ? 'color-primary' : 'color-gray-900')}
  );
  line-height: 2;

  &:focus {
    outline-offset: 5px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default CategoriesList;
