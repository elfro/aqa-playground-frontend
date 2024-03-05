import * as React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';

interface HeroProps {
  children: React.ReactNode;
}
function Hero({ children }: HeroProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.section`
  background-image: linear-gradient(to right, hsl(0deg 0% 100% / 30%) 0 100%),
    url('/hero.svg');
  background-color: hsl(185deg 5% 95%);
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  height: 50vh;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  text-shadow: 0px 0.3em 1em var(--color-gray-500);

  ${QUERIES.tabletAndLess} {
    justify-content: center;
  }
`;

export default Hero;
