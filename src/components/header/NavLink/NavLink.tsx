'use client';

import * as React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '@/constants/styles.constants';
import Link from 'next/link';

interface NavLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  href: string;
  children: React.ReactNode;
  $active?: boolean;
}
function NavLink({ href, $active, children }: NavLinkProps) {
  return (
    <LinkWrapper href={href} $active={$active}>
      <Text>{children}</Text>
      <SubText aria-hidden={true}>{children}</SubText>
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)<NavLinkProps>`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-wrap: nowrap;
  overflow: hidden;
  border-bottom: ${(props) => (props.$active ? '1px solid' : 'none')};

  &:focus {
    outline-offset: 5px;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      border-bottom-color: var(--color-primary);
    }
  }
`;

const Text = styled.span`
  --translate-from: 0;
  --translate-to: 100%;

  display: block;
  will-change: transform;
  transition: 700ms ease;
  transform: translateX(var(--translate-from));

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${LinkWrapper}:hover & {
      transform: translateX(var(--translate-to));
      transition: 250ms ease;
    }
  }
`;

const SubText = styled(Text)`
  --translate-from: -100%;
  --translate-to: 0;

  position: absolute;
  color: var(--color-primary);
  top: 0;
  left: 0;
`;

export default NavLink;
