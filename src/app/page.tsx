'use client';

import * as React from 'react';
import styled from 'styled-components';

import Hero from '@/components/Hero';
import MainSection from '@/components/MainSection';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import { QUERIES } from '@/constants/styles.constants';
// ToDo: add metadata
function Home() {
  return (
    <MainSection>
      <Hero>
        <Title>E2E Playground</Title>
      </Hero>
      <MaxWidthWrapper></MaxWidthWrapper>
    </MainSection>
  );
}

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: 50px;

  ${QUERIES.tabletAndLess} {
    margin-top: revert;
    font-size: 3rem;
  }
`;

export default Home;
