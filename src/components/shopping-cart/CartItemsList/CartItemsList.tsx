import * as React from 'react';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import {
  CART_ITEM_ACTIONS,
  Item,
  useCartItemActions,
  useCartItems,
} from '@/components/Providers/CartProvider';

import IconButton from '@/components/ui/IconButton/IconButton';
import UnstyledButton from '@/components/ui/UnstyledButton/UnstyledButton';

import { QUERIES, WEIGHTS } from '@/constants/styles.constants';

function CartItemsList({ onItemLinkClick }: { onItemLinkClick: () => void }) {
  const items = useCartItems();
  const cartActions = useCartItemActions();
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

  if (!items) {
    return <div>There are no items in the cart</div>;
  }

  return (
    <section id='items-list'>
      <ItemsList>
        {items.map((item) => (
          <ItemsListRow key={item.product.id}>
            <Img src={item.product.image} width={100} height={100} alt='' />
            <ProductLink
              href={`/shop/products/${item.product.id}`}
              onClick={onItemLinkClick}
            >
              {item.product.title}
            </ProductLink>

            <Price>${item.product.price}</Price>
            <Quantity>
              <IconButton
                iconId='minus'
                title='Decrease Quantity'
                thickness='thin'
                onClick={() => handleDecreaseItemQuantity(item)}
                disabled={item.quantity === 1}
              />
              <span>{item.quantity}</span>
              <IconButton
                iconId='plus'
                title='Increase Quantity'
                thickness='thin'
                onClick={() => handleIncreaseItemQuantity(item)}
                disabled={item.product.quantity <= item.quantity}
              />
            </Quantity>
            <RemoveItemWrapper
              iconId='trash'
              title='Remove'
              onClick={() => handleDeleteItem(item)}
            />
          </ItemsListRow>
        ))}
      </ItemsList>
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
  );
}

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ItemsListRow = styled.li`
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

const RemoveItemWrapper = styled(IconButton)`
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

export default CartItemsList;
