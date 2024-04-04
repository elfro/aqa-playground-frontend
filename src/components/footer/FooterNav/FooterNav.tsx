'use client';

import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { QUERIES } from '@/constants/styles.constants';
import { Category } from '@/types/category';

function FooterNav({
  productCategoryLinks,
}: {
  productCategoryLinks: Category[];
}) {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <NavArea>
          <nav>
            <NavHeading>
              <NavHeadingLink href='/shop/products'>Products</NavHeadingLink>
            </NavHeading>
            <NavList>
              {Array.isArray(productCategoryLinks) &&
                productCategoryLinks.map((link, index: number) => (
                  <li key={index}>
                    <NavLink href={link.slug}>{link.title}</NavLink>
                  </li>
                ))}
            </NavList>
          </nav>
          <nav>
            <NavHeading>Get to Know Us</NavHeading>
            <NavList>
              <li>
                <NavLink href='/#'>About Us</NavLink>
              </li>
              <li>
                <NavLink href='/#'>FAQ</NavLink>
              </li>
              <li>
                <NavLink href='/#'>Contact Us</NavLink>
              </li>
            </NavList>
          </nav>
          <nav>
            <NavHeading>Legal and Privacy</NavHeading>
            <NavList>
              <li>
                <NavLink href='/#'>Terms and Conditions</NavLink>
              </li>
              <li>
                <NavLink href='/#'>Privacy Policy</NavLink>
              </li>
            </NavList>
          </nav>
        </NavArea>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-image: linear-gradient(to right, hsl(0deg 0% 95.29% / 30%) 0 100%),
    url('/footer.svg');
  background-size: cover;
  background-position: bottom center;

  color: var(--color-gray-900);
`;

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 32px * 2));
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;

  ${QUERIES.tabletAndLess} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const NavArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: start;
  text-align: left;
  gap: 32px;
  padding: 32px 0 48px;

  ${QUERIES.tabletAndLess} {
    display: flex;
    flex-direction: column;
    align-items: revert;
    text-align: center;
  }
`;
const NavHeading = styled.h2`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  margin-bottom: 8px;
`;

const NavHeadingLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: capitalize;

  &:focus {
    outline-offset: 5px;
  }
`;
export default FooterNav;
