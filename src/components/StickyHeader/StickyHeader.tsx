'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';

import Logo from '@/components/Logo';
import NavLink from '@/components/NavLink';
import AuthButton from '@/components/AuthButton';
import MobileMenu from '@/components/MobileMenu';

import CartSidebar from '@/components/CartSidebar';
import { QUERIES } from '@/constants/styles.constants';
import { Item } from '@/constants/pages-data.contants';

function StickyHeader({ menuItems }: { menuItems: Item[] }) {
  const session = useSession();
  const isLoggedIn =
    session.status === 'authenticated' &&
    session.data.user?.username !== undefined;
  const currentPathname = usePathname();

  return (
    <HeaderSticky>
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              href={item.slug}
              $active={currentPathname.includes(item.slug) ? true : undefined}
            >
              {item.title}
            </NavLink>
          ))}
        </Nav>
        <DesktopActions>
          {isLoggedIn && <span>Hello, {session.data?.user.username}</span>}
          <CartSidebar />
          <AuthButton mode='desktop' />
        </DesktopActions>
        <MobileActions>
          <CartSidebar />
          <MobileMenu initialMenuItems={menuItems} />
        </MobileActions>
      </Wrapper>
    </HeaderSticky>
  );
}

const HeaderSticky = styled.header`
  height: var(--header-height);
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: var(--color-white);
`;

const LogoWrapper = styled.div`
  ${QUERIES.tabletAndLess} {
    margin-right: auto;
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 16px;

  ${QUERIES.tabletAndLess} {
    display: none;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const DesktopActions = styled(Actions)`
  flex-basis: 200px;
  ${QUERIES.tabletAndLess} {
    display: none;
  }
`;

const MobileActions = styled(Actions)`
  display: none;

  ${QUERIES.tabletAndLess} {
    display: flex;
  }
`;

export default StickyHeader;
