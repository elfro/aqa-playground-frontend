'use client';

import * as React from 'react';
import styled from 'styled-components';

import { QUERIES } from '@/constants/styles.constants';

function EmptyCart() {
  return (
    <Wrapper>
      <Img src='/empty-cart.svg' alt='Shopping cart with dash stroke arrow' />
      <Text>Your cart is empty</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  height: 400px;
  transform: translateX(35%);
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
