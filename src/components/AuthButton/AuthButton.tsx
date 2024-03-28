'use client';

import * as React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import UnstyledButton from '@/components/ui/UnstyledButton/UnstyledButton';
import IconButton from '@/components/ui/IconButton';

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

  const iconId = isLoggedIn ? 'logout' : 'login';
  const title = isLoggedIn ? 'Sign out' : 'Sign in';

  return (
    <form onSubmit={onSubmit}>
      {isDesktop ? (
        <IconButton iconId={iconId} title={title} />
      ) : (
        <UnstyledButton {...delegated}>
          {isLoggedIn ? 'Sign out' : 'Sign in'}
        </UnstyledButton>
      )}
    </form>
  );
}

export default AuthButton;
