'use client';

import * as React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

import IconButton from '@/components/ui/IconButton';
import ButtonAsLink from '@/components/ui/ButtonAsLink';

interface AuthButtonProps {
  mode: 'desktop' | 'mobile';
  session: Session | null;
}
function AuthButton({ mode, session, ...delegated }: AuthButtonProps) {
  const isLoggedIn = session && session.user?.username !== undefined;
  const isDesktop = mode === 'desktop';

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isLoggedIn) {
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
        <ButtonAsLink $underline='hover' {...delegated}>
          {isLoggedIn ? 'Sign out' : 'Sign in'}
        </ButtonAsLink>
      )}
    </form>
  );
}

export default AuthButton;
