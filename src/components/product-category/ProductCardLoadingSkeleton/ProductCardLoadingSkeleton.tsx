'use client';

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Redacted_Script } from 'next/font/google';

import { PRODUCT_TITLE_SKELETON } from '@/constants/loading-skeleton-data.constants';

import { WEIGHTS } from '@/constants/styles.constants';

const loadingFont = Redacted_Script({
  weight: ['400'],
  subsets: ['latin'],
  display: 'block',
});

function ProductCardLoadingSkeleton() {
  return (
    <Card className={loadingFont.className}>
      <ImageWrapper></ImageWrapper>
      <Row>
        <Name>${PRODUCT_TITLE_SKELETON}</Name>
        <Price>100.5</Price>
      </Row>
      <Row>
        <ButtonSkeleton />
      </Row>
    </Card>
  );
}

const pulsate = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
`;

const Card = styled.article`
  --animation: ${pulsate} 3s ease-in-out 0.5s infinite;
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;

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
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 150px;
  background: var(--color-gray-300);
  width: 100%;
  border-radius: 0.5rem;
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: var(--animation);
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
  font-weight: ${WEIGHTS.normal};
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
  font-weight: ${WEIGHTS.normal};
`;

const ButtonSkeleton = styled.div`
  width: 142px;
  height: 37px;
  background: var(--color-gray-300);
  border-radius: 0.125rem;
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: var(--animation);
  }
`;
export default ProductCardLoadingSkeleton;
