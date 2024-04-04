'use client';

import * as React from 'react';
import styled from 'styled-components';

import Button from '@/components/ui/Button';
import { QUERIES } from '@/constants/styles.constants';

function EmptyCart({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <Img src='/empty-cart.svg' alt='Shopping cart with dash stroke arrow' />
      <Text>Your cart is empty</Text>
      <Button size='small' variant='fill' onClick={onClick}>
        Go shopping
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100%;
`;

const Img = styled.img`
  height: 400px;
  margin-left: auto;
  transform: translateX(var(--modal-padding));
  pointer-events: none;

  ${QUERIES.tabletAndLess} {
    height: 200px;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-900);
  text-align: center;

  ${QUERIES.tabletAndLess} {
    font-size: 1.125rem;
  }
`;
export default EmptyCart;
