import * as React from 'react';
import styled from 'styled-components';
import UnstyledButton, {
  UnstyledButtonProps,
} from '@/components/ui/UnstyledButton/UnstyledButton';
import { WEIGHTS } from '@/constants/styles.constants';

function MobileMenuItemButton({ children, ...delegated }: UnstyledButtonProps) {
  return <MenuItem {...delegated}>{children}</MenuItem>;
}

const MenuItem = styled(UnstyledButton)`
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

export default MobileMenuItemButton;
