'use client';

import * as React from 'react';
import styled from 'styled-components';

import Hero from '@/components/ui/Hero';
import MainSection from '@/components/layout-wrappers/MainSection';
import MaxWidthWrapper from '@/components/layout-wrappers/MaxWidthWrapper';

import { QUERIES } from '@/constants/styles.constants';
import { METADATA_PAGE_TITLE } from '@/constants/pages-data.contants';

function Home() {
  return (
    <MainSection>
      <Hero backgroundImageSrc='/hero.svg'>
        <Title>{METADATA_PAGE_TITLE}</Title>
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
