'use client';

import * as React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants/styles.constants';

interface HeroProps {
  children: React.ReactNode;
  backgroundImageSrc?: string | undefined;
  backgroundColor?: string | undefined;
}
function Hero({ backgroundImageSrc, backgroundColor, children }: HeroProps) {
  return (
    <Wrapper
      $backgroundImageSrc={backgroundImageSrc}
      $backgroundColor={backgroundColor}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section<{
  $backgroundImageSrc: string | undefined;
  $backgroundColor: string | undefined;
}>`
  background-image: linear-gradient(to right, hsl(0deg 0% 100% / 30%) 0 100%),
    url(${(props) => props.$backgroundImageSrc});
  background-color: ${(props) =>
    props.$backgroundColor || 'hsl(185deg 5% 95%)'};
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  height: 50vh;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: 0px 0.3em 1em var(--color-gray-500);

  ${QUERIES.tabletAndLess} {
    justify-content: center;
  }
`;

export default Hero;
