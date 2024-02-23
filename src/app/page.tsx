'use client';

import Header from '@/components/Header';
import styled from 'styled-components';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { QUERIES } from '@/constants';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero>
          <Title>E2E Playground</Title>
        </Hero>
        <BackGroundWrapper>
          <MaxWidthWrapper></MaxWidthWrapper>
        </BackGroundWrapper>
      </main>
      <Footer />
    </>
  );
}

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: var(--color-secondary);
  margin-top: 50px;

  ${QUERIES.tabletAndLess} {
    margin-top: revert;
    font-size: 3rem;
  }
`;

const BackGroundWrapper = styled.div`
  background-image: linear-gradient(to right, hsl(0deg 0% 100% / 30%) 0 100%),
    url('/wave-main-2.svg');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

const MaxWidthWrapper = styled.div`
  //width: 100%;
  max-width: var(--content-width);
  padding: 64px var(--viewport-padding);
  margin: 0 auto;
  height: 400px;
`;

export default Home;
