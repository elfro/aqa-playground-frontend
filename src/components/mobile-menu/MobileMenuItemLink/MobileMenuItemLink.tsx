import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { WEIGHTS } from '@/constants/styles.constants';

interface MobileMenuLinkProps {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: string | undefined;
  $active?: boolean;
}
function MobileMenuItemLink({
  href,
  onClick,
  $active,
  children,
}: MobileMenuLinkProps) {
  return (
    <MenuItem onClick={onClick} href={href} $active={$active}>
      {children}
    </MenuItem>
  );
}

const MenuItem = styled(Link)<MobileMenuLinkProps>`
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  color: var(
    --${(props) => (props.$active ? 'color-primary' : 'color-gray-900')}
  );
  text-transform: uppercase;
  text-decoration: none;
  width: max-content;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      color: var(--color-primary-light);
    }
  }
`;
export default MobileMenuItemLink;
