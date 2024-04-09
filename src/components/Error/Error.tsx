'use client';

import * as React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

import Spacer from '@/components/ui/Spacer';
import MainWithCenteredContentSection from '@/components/layout-wrappers/MainWithCenteredContentSection/MainWithCenteredContentSection';

interface ErrorProps {
  imgSrc: string;
  imgAlt: string;
  buttonTitle?: string;
  title: string;
  description?: string;
}
function Error({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonTitle,
}: ErrorProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={imgSrc}
          alt={imgAlt}
          quality={100}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </ImageWrapper>
      <Header>{title}</Header>
      {description && <p>{description}</p>}
      <Spacer $size={24} />
      {buttonTitle && <LinkAsButton href='/'>{buttonTitle}</LinkAsButton>}
      <Spacer $size={48} />
    </Wrapper>
  );
}

const Wrapper = styled(MainWithCenteredContentSection)`
  flex-direction: column;
  text-align: center;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: inherit;
`;

const LinkAsButton = styled(Link)`
  color: var(--color-white);
  background-color: var(--color-primary);
  font-size: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 0.125rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  border: none;

  &:hover {
    background: var(--color-primary-light);
  }

  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: -5px;
  }
`;
export default Error;
