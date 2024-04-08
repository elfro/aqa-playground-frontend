'use client';

import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Button from '@/components/ui/Button';

import { WEIGHTS } from '@/constants/styles.constants';
import {
  CART_ITEM_ACTIONS,
  useCartItemActions,
} from '@/components/Providers/CartProvider';
import Image from 'next/image';
import { Product } from '@/types/product';

function ProductCard({ product }: { product: Product }) {
  const itemActions = useCartItemActions();

  return (
    <LinkWrapper href={`/shop/products/${product.id}`}>
      <Card>
        <ImageWrapper>
          <Img
            alt=''
            src={product.image}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </ImageWrapper>
        <Row>
          <Name>{product.title}</Name>
          <Price>{product.price}</Price>
        </Row>
        <Row>
          <Button
            variant='fill'
            size='small'
            value='Add to card'
            title='Add to card'
            onClick={(e) => {
              e.preventDefault();
              itemActions({
                type: CART_ITEM_ACTIONS.ADD_ITEM,
                item: product,
              });
            }}
          >
            Add to card
          </Button>
        </Row>
      </Card>
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)`
  text-decoration: none;
  background-color: var(--color-white);
  background-image: linear-gradient(
          to bottom,
          hsla(0, 0%, 100%, 0.12) 0%,
          hsla(180, 4.15%, 99.87%, 0.132) 12.9%,
          hsla(180, 4.15%, 99.72%, 0.147) 25%,
          hsla(180, 4.15%, 99.54%, 0.164) 36.1%,
          hsla(180, 4.16%, 99.32%, 0.185) 46.4%,
          hsla(180, 4.16%, 99.04%, 0.212) 55.7%,
          hsla(180, 4.17%, 98.71%, 0.244) 64.1%,
          hsla(180, 4.18%, 98.3%, 0.282) 71.7%,
          hsla(180, 4.19%, 97.81%, 0.329) 78.3%,
          hsla(180, 4.2%, 97.22%, 0.384) 84.1%,
          hsla(180, 4.22%, 96.53%, 0.449) 89%,
          hsla(180, 4.24%, 95.71%, 0.524) 92.9%,
          hsla(180, 4.26%, 94.77%, 0.611) 96%,
          hsla(180, 4.28%, 93.67%, 0.71) 98.2%,
          hsla(180, 4.31%, 92.42%, 0.823) 99.6%,
          hsla(180, 4.35%, 90.98%, 0.95) 100%
   );
  overflow: hidden;
  border-radius: 16px 16px 4px 4px;
  transition: filter 500ms ease;
  will-change: filter;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus {
      transition: filter 250ms ease;
      filter: drop-shadow(0px -4px 8px var(--color-gray-300));
    }
`;
const Card = styled.article`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 150px;
`;

const Img = styled(Image)`
  display: block;
  object-fit: contain;

  transition: 500ms ease;
  transform-origin: center center;
  will-change: transform;
  transform: scale(0.8);

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${LinkWrapper}:hover &,
    ${LinkWrapper}:focus & {
      transition: 250ms ease;
      transform: scale(1);
    }
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;

  &:last-of-type {
    margin-top: auto;
    justify-content: center;
  }
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);

  --line-clamp: 2;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line-clamp);
  overflow: hidden;
`;

const Price = styled.span`
  color: var(--color-primary);
  text-decoration: var(--text-decoration);
  font-weight: ${WEIGHTS.medium};
`;

export default ProductCard;
