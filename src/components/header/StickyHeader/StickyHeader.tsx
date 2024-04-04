'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import Logo from '@/components/header/Logo';
import NavLink from '@/components/header/NavLink';
import MobileMenu from '@/components/mobile-menu/MobileMenu';
import CartSidebar from '@/components/shopping-cart/CartSidebar';
import AuthButton from '@/components/AuthButton';

import { QUERIES } from '@/constants/styles.constants';
import { MenuItem } from '@/constants/pages-data.contants';
import { Session } from 'next-auth';

function StickyHeader({
  menuItems,
  session,
}: {
  menuItems: MenuItem[];
  session: Session | null;
}) {
  const isLoggedIn = session && session.user?.username !== undefined;
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
          {isLoggedIn && <span>Hello, {session.user?.username}</span>}
          <CartSidebar />
          <AuthButton mode='desktop' session={session} />
        </DesktopActions>
        <MobileActions>
          <CartSidebar />
          <MobileMenu initialMenuItems={menuItems} session={session} />
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
