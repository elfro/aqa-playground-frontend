'use client';

import * as React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

import IconButton from '@/components/ui/IconButton';
import ButtonAsLink from '@/components/ui/ButtonAsLink';
import {
  CART_ITEM_ACTIONS,
  useCartItemActions,
} from '@/components/Providers/CartProvider';

interface AuthButtonProps {
  mode: 'desktop' | 'mobile';
  session: Session | null;
}
function AuthButton({ mode, session, ...delegated }: AuthButtonProps) {
  const isLoggedIn = session && session.user.accessToken !== undefined;
  const isDesktop = mode === 'desktop';
  const cartActions = useCartItemActions();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isLoggedIn) {
      signIn();
      return;
    }

    signOut({ callbackUrl: '/', redirect: true });
    cartActions({
      type: CART_ITEM_ACTIONS.RESET_ITEMS,
    });
  }

  const iconId = isLoggedIn ? 'logout' : 'login';
  const title = isLoggedIn ? 'Sign out' : 'Sign in';

  return (
    <form onSubmit={handleSubmit}>
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
