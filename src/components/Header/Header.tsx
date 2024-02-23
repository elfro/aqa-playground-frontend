import * as React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { LogIn, ShoppingBag, Menu } from 'react-feather';

import Logo from '@/components/Logo';
import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';
import { QUERIES } from '@/constants';
import NavLink from '@/components/NavLink';

function Header() {
  const router = useRouter();

  return (
    <header>
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href='/'>Products</NavLink>
          <NavLink href='/'>Products</NavLink>
          <NavLink href='/'>Products</NavLink>
          <NavLink href='/'>Products</NavLink>
        </Nav>
        <DesktopActions>
          <UnstyledButton>
            <ShoppingBag size={24} />
            <VisuallyHidden>Open Card</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => router.push('/signin')}>
            <LogIn size={24} />
            <VisuallyHidden>Sign in</VisuallyHidden>
          </UnstyledButton>
        </DesktopActions>
        <MobileActions>
          <UnstyledButton>
            <Menu size={24} />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <ShoppingBag size={24} />
            <VisuallyHidden>Open Card</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </Wrapper>
    </header>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 20px;
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
  justify-content: center;
  gap: 16px;
`;

const DesktopActions = styled(Actions)`
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
export default Header;
