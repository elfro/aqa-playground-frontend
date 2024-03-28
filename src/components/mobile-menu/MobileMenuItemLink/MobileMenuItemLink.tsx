import * as React from 'react';
import { DialogClose } from '@radix-ui/react-dialog';
import Link from 'next/link';
import styled from 'styled-components';
import { WEIGHTS } from '@/constants/styles.constants';

interface MobileMenuLinkProps {
  href: string;
  children: string | undefined;
  $active?: boolean;
}
function MobileMenuItemLink({ href, $active, children }: MobileMenuLinkProps) {
  return (
    <DialogClose asChild>
      <MenuItem href={href} $active={$active}>
        {children}
      </MenuItem>
    </DialogClose>
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

  &:hover {
    color: var(--color-primary-light);
  }
`;
export default MobileMenuItemLink;
