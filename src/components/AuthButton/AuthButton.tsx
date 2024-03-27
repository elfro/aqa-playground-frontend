'use client';

import * as React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import { LogIn, LogOut } from 'react-feather';
import UnstyledButton from '@/components/UnstyledButton/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';

interface AuthButtonProps {
  mode: 'desktop' | 'mobile';
}
function AuthButton({ mode, ...delegated }: AuthButtonProps) {
  const session = useSession();
  const isLoggedIn =
    session.status === 'authenticated' &&
    session.data.user?.username !== undefined;
  const isDesktop = mode === 'desktop';

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (session.status !== 'authenticated') {
      signIn();
      return;
    }

    signOut({ callbackUrl: '/', redirect: true });
  }

  const Icon = isLoggedIn ? LogOut : LogIn;

  return (
    <form onSubmit={onSubmit}>
      {isDesktop ? (
        <UnstyledButton>
          <Icon size={24} />
          <VisuallyHidden>
            {!isLoggedIn ? 'Sign in' : 'Sign out'}
          </VisuallyHidden>
        </UnstyledButton>
      ) : (
        <UnstyledButton {...delegated}>
          {!isLoggedIn ? 'Sign in' : 'Sign out'}
        </UnstyledButton>
      )}
    </form>
  );
}

export default AuthButton;
