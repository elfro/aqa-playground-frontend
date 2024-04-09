import * as React from 'react';

import styled from 'styled-components';

import { Item, useCartItems } from '@/components/Providers/CartProvider';

import { QUERIES } from '@/constants/styles.constants';

function CartOrderSummary() {
  const items = useCartItems();

  if (!items) {
    return <div>Please, add products to the shopping cart first.</div>;
  }

  const subtotal = calculateSubtotal(items);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Summary
      id='order-summary'
      role='contentinfo'
      aria-label='Order summary information'
    >
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
  );
}

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
export default CartOrderSummary;
