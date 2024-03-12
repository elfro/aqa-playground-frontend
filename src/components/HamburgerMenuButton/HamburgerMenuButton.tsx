import * as React from 'react';
import { UnstyledButtonProps } from '@/components/UnstyledButton';
import UnstyledButton from '@/components/UnstyledButton/UnstyledButton';
import { Menu as HamburgerMenuIcon } from 'react-feather';
import VisuallyHidden from '@/components/VisuallyHidden';

function HamburgerMenuButton(
  props: UnstyledButtonProps,
  forwardRef: React.Ref<HTMLButtonElement>
) {
  return (
    <UnstyledButton {...props} ref={forwardRef}>
      <HamburgerMenuIcon size={24} />
      <VisuallyHidden>Open Menu</VisuallyHidden>
    </UnstyledButton>
  );
}

export default React.forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  HamburgerMenuButton
);
