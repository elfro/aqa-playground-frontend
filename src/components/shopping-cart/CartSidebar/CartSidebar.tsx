'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { useCartItems } from '@/components/Providers/CartProvider';

import CartMenuButton from '@/components/shopping-cart/CartMenuButton';
import CartItemsList from '@/components/shopping-cart/CartItemsList';
import CartOrderSummary from '@/components/shopping-cart/CartOrderSummary';
import EmptyCart from '@/components/shopping-cart/EmptyCart';
import Button from '@/components/ui/Button';
import ModalSidebar from '@/components/ui/ModalSidebar';
import Spinner from '@/components/ui/Spinner';

import { QUERIES } from '@/constants/styles.constants';

function CartSidebar() {
  const [showCart, setShowCart] = React.useState(false);
  const items = useCartItems();
  const router = useRouter();

  const isCartEmpty = !items || items.length === 0;

  return (
    <ModalSidebar
      isOpen={showCart}
      onOpenChange={setShowCart}
      triggerElement={<CartMenuButton />}
      ariaLabel='Shopping cart'
      mode='full'
    >
      <React.Suspense fallback={<Spinner />}>
        {isCartEmpty && (
          <EmptyCart
            onClick={() => {
              router.push('/shop');
              setShowCart(false);
            }}
          />
        )}
        {!isCartEmpty && (
          <InnerWrapper>
            <Title>Shopping Cart</Title>
            <CartItemsList onItemLinkClick={() => setShowCart(false)} />
            <CartOrderSummary />
            <Button size='small' variant='fill'>
              Proceed to Checkout
            </Button>
          </InnerWrapper>
        )}
      </React.Suspense>
    </ModalSidebar>
  );
}

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${QUERIES.tabletAndLess} {
    gap: 24px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-transform: capitalize;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: 600;
`;

export default CartSidebar;
