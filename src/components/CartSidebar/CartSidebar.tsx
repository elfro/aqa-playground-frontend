'use client';

import * as React from 'react';
import {
  CART_ITEM_ACTIONS,
  Item,
  useCartItemActions,
  useCartItems,
} from '@/components/CartProvider';
import ModalSidebarRight from '@/components/ModalSidebarRight';
import UnstyledButton from '@/components/UnstyledButton/UnstyledButton';
import { MinusSquare, PlusSquare, Trash } from 'react-feather';
import VisuallyHidden from '@/components/VisuallyHidden';
import Spinner from '@/components/Spinner';
import styled from 'styled-components';
import CartMenuButton from '@/components/CartMenuButton';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import EmptyCart from '@/components/EmptyCart';
import { QUERIES, WEIGHTS } from '@/constants/styles.constants';

function CartSidebar() {
  const [showCart, setShowCart] = React.useState(false);
  const items = useCartItems();
  const cartActions = useCartItemActions();

  const isCartEmpty = !items || items.length === 0;
  let subtotal, tax, total;

  if (items) {
    subtotal = calculateSubtotal(items);
    tax = subtotal * 0.1;
    total = subtotal + tax;
  }

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function handleOnOpenChange() {
    if (!showCart) {
      setShowCart(true);
    }
    if (showCart) {
      setShowCart(false);
    }
  }

  function handleDeleteItem(item: Item) {
    cartActions({
      type: CART_ITEM_ACTIONS.DELETE_ITEM,
      item: item,
    });
  }

  function handleIncreaseItemQuantity(item: Item) {
    cartActions({
      type: CART_ITEM_ACTIONS.ADD_ITEM,
      item: item.product,
    });
  }

  function handleDecreaseItemQuantity(item: Item) {
    cartActions({
      type: CART_ITEM_ACTIONS.DECREASE_ITEM_QUANTITY,
      item: item,
    });
  }

  return (
    <ModalSidebarRight
      isOpen={showCart}
      onOpenChange={handleOnOpenChange}
      triggerElement={<CartMenuButton />}
      ariaLabel='Shopping cart'
      mode='full'
    >
      <React.Suspense fallback={<Spinner />}>
        {isCartEmpty && <EmptyCart />}
        {!isCartEmpty && (
          <InnerWrapper>
            <Title>Shopping Cart</Title>
            <section id='items-table'>
              {items.map((item) => (
                <ItemsTableRow key={item.product.id}>
                  <Img
                    src={item.product.image}
                    width={100}
                    height={100}
                    alt=''
                  />
                  <ProductLink href={`/products/${item.product.id}`}>
                    {item.product.title}
                  </ProductLink>
                  <Price>${item.product.price}</Price>
                  <Quantity>
                    <ActionButton
                      onClick={() => handleDecreaseItemQuantity(item)}
                      disabled={item.quantity === 1}
                    >
                      <MinusSquare size={24} strokeWidth={1} />
                      <VisuallyHidden>Decrease Quantity</VisuallyHidden>
                    </ActionButton>
                    <span>{item.quantity}</span>
                    <ActionButton
                      onClick={() => handleIncreaseItemQuantity(item)}
                      disabled={item.product.quantity <= item.quantity}
                    >
                      <PlusSquare size={24} strokeWidth={1} />
                      <VisuallyHidden>Increase Quantity</VisuallyHidden>
                    </ActionButton>
                  </Quantity>
                  <RemoveItemWrapper
                    onClick={() => handleDeleteItem(item)}
                    title='Remove'
                  >
                    <Trash size={24} />
                    <VisuallyHidden>Remove</VisuallyHidden>
                  </RemoveItemWrapper>
                </ItemsTableRow>
              ))}
              <DeleteAllButton
                onClick={() => {
                  cartActions({
                    type: CART_ITEM_ACTIONS.RESET_ITEMS,
                  });
                }}
              >
                Delete All
              </DeleteAllButton>
            </section>
            <Summary id='order-summary'>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryRow>
                <SummaryHeading>SubTotal</SummaryHeading>
                <SummaryValue>{priceFormatter.format(subtotal!)}</SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryHeading>Tax</SummaryHeading>
                <SummaryValue>{priceFormatter.format(tax!)}</SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryHeading>Total</SummaryHeading>
                <TotalValue>{priceFormatter.format(total!)}</TotalValue>
              </SummaryRow>
            </Summary>
            <Button size={'small'} variant='fill'>
              Proceed to Checkout
            </Button>
          </InnerWrapper>
        )}
      </React.Suspense>
    </ModalSidebarRight>
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

const ItemsTableRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto 100px 50px;
  grid-template-areas: 'picture name price quantity button';
  align-items: start;
  gap: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-gray-300);

  ${QUERIES.tabletAndLess} {
    grid-template-areas:
      'picture button'
      'name name'
      'price quantity';
    grid-template-columns: 70% 30%;
    row-gap: 1rem;
    column-gap: 0;
  }
`;

const Img = styled(Image)`
  grid-area: picture;
  object-fit: contain;
`;

const ProductLink = styled(Link)`
  grid-area: name;
  display: block;
  color: var(--color-gray-900);
  text-decoration: none;
  text-transform: capitalize;
`;

const Price = styled.span`
  grid-area: price;
  font-weight: 600;
  color: var(--color-gray-900);
`;

const Quantity = styled.div`
  grid-area: quantity;
  display: flex;
  justify-content: space-evenly;

  ${QUERIES.tabletAndLess} {
    justify-content: space-between;
  }
`;

const ActionButton = styled(UnstyledButton)`
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;

const RemoveItemWrapper = styled(ActionButton)`
  grid-area: button;
  justify-self: end;
`;

const DeleteAllButton = styled(UnstyledButton)`
  font-size: 1rem;
  font-weight: ${WEIGHTS.normal};
  color: var(--color-gray-900);
  width: max-content;
  border-bottom: 1px solid var(--color-gray-900);
  margin-top: 10px;

  &:hover {
    border-color: transparent;
  }
`;

const Summary = styled.section`
  background-color: var(--color-gray-100);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;
const SummaryTitle = styled.h3`
  font-size: 1.25rem;
  text-transform: capitalize;
  color: var(--color-gray-900);
  font-weight: 600;
  margin-bottom: 8px;
`;
const SummaryRow = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  ${QUERIES.tabletAndLess} {
    width: 100%;
  }

  &:last-of-type {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 8px;
  }
`;

const SummaryHeading = styled.span`
  font-size: 1.125rem;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: 600;
  text-align: right;
`;

const SummaryValue = styled.span`
  font-size: 1rem;
  color: var(--color-gray-900);
`;

const TotalValue = styled(SummaryValue)`
  font-weight: 600;
`;

function calculateSubtotal(items: Item[]) {
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += Number(item.product.price) * item.quantity;
  });

  return subtotal;
}
export default CartSidebar;
