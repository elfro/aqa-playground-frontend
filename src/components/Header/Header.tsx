'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { LogIn, LogOut, Menu, ShoppingBag } from 'react-feather';

import Logo from '@/components/Logo';
import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';
import { QUERIES } from '@/constants';
import NavLink from '@/components/NavLink';

import {
  USER_ACTION,
  useUser,
  useUserActions,
} from '@/components/UserProvider';

function Header() {
  return (
    <header>
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href='/products'>Here</NavLink>
          <NavLink href='/'>Products</NavLink>
          <NavLink href='/'>Products</NavLink>
          <NavLink href='/'>Products</NavLink>
        </Nav>
        <DesktopActions>
          <UnstyledButton>
            <ShoppingBag size={24} />
            <VisuallyHidden>Open Card</VisuallyHidden>
          </UnstyledButton>
          <AuthButton />
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

function AuthButton() {
  const router = useRouter();
  const user = useUser();
  const userDispatch = useUserActions();

  // ToDo: extract to custom hook
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const shouldSignIn = !user?.isLoggedIn;

  function handleSignOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (userDispatch) {
      userDispatch({
        type: USER_ACTION.RESET,
      });
    }
    router.push('/');
  }

  if (!shouldSignIn) {
    return (
      <UnstyledButton onClick={handleSignOut}>
        <LogOut size={24} />
        <VisuallyHidden>Sign out</VisuallyHidden>
      </UnstyledButton>
    );
  }

  return (
    <>
      <UnstyledButton
        onClick={(e) => {
          e.preventDefault();
          router.push('/signin');
        }}
      >
        <LogIn size={24} />
        <VisuallyHidden>Sign in</VisuallyHidden>
      </UnstyledButton>
      {<div>{user?.username}</div>}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
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
export default React.memo(Header);
