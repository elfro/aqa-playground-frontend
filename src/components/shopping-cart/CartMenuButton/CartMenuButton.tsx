import * as React from 'react';

import styled from 'styled-components';

import { useCartItems } from '@/components/Providers/CartProvider';

import ComponentOnMount from '@/components/ComponentOnMount';
import IconButton from '@/components/ui/IconButton';
import { UnstyledButtonProps } from '@/components/ui/UnstyledButton';

function CartMenuButton(
  props: UnstyledButtonProps,
  innerRef: React.Ref<HTMLButtonElement>
) {
  const items = useCartItems();
  const totalAddedProduct =
    items?.reduce((total, nextItem) => total + nextItem.quantity, 0) || null;

  return (
    <Wrapper iconId='shopping-bag' title='Open Card' ref={innerRef} {...props}>
      <React.Suspense>
        <ComponentOnMount>
          {totalAddedProduct && (
            <TotalProducts>{totalAddedProduct}</TotalProducts>
          )}
        </ComponentOnMount>
      </React.Suspense>
    </Wrapper>
  );
}

const Wrapper = styled(IconButton)`
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
