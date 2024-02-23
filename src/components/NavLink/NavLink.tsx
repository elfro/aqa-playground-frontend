'use client';

import * as React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '@/constants';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href}>
      <Text>{children}</Text>
      <SubText aria-hidden={true}>{children}</SubText>
    </Link>
  );
}

const Link = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-wrap: nowrap;
  overflow: hidden;

  &:focus {
    outline-offset: 5px;
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
    ${Link}:hover & {
      transform: translateX(var(--translate-to));
      transition: 250ms ease;
    }
  }
`;

const SubText = styled(Text)`
  --translate-from: -100%;
  --translate-to: 0;

  position: absolute;
  color: var(--color-secondary);
  top: 0;
  left: 0;
`;

export default NavLink;
