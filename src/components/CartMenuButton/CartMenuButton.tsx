import * as React from 'react';

import styled from 'styled-components';

import { ShoppingBag } from 'react-feather';

import { useCartItems } from '@/components/CartProvider';
import VisuallyHidden from '@/components/VisuallyHidden';
import UnstyledButton from '@/components/UnstyledButton/UnstyledButton';
import { UnstyledButtonProps } from '@/components/UnstyledButton';
import ComponentOnMount from '@/components/ComponentOnMount';

function CartMenuButton(
  props: UnstyledButtonProps,
  innerRef: React.Ref<HTMLButtonElement>
) {
  const items = useCartItems();
  const totalAddedProduct =
    items?.reduce((total, nextItem) => total + nextItem.quantity, 0) || null;

  return (
    <Wrapper {...props} ref={innerRef}>
      <ShoppingBag size={24} />
      <React.Suspense>
        <ComponentOnMount>
          {totalAddedProduct && (
            <TotalProducts>{totalAddedProduct}</TotalProducts>
          )}
        </ComponentOnMount>
      </React.Suspense>
      <VisuallyHidden>Open Card123</VisuallyHidden>
    </Wrapper>
  );
}

const Wrapper = styled(UnstyledButton)`
  position: relative;
`;
const TotalProducts = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 50%);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 10000px;

  font-size: 0.75rem;
  color: var(--color-white);
  background-color: var(--color-primary);
`;

export default React.forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  CartMenuButton
);
