import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  USER_ACTION,
  useUser,
  useUserActions,
} from '@/components/UserProvider';
import Spinner from '@/components/Spinner';
import UnstyledButton from '@/components/UnstyledButton/UnstyledButton';
import { LogIn, LogOut } from 'react-feather';
import VisuallyHidden from '@/components/VisuallyHidden';

interface AuthButtonProps {
  mode: 'desktop' | 'mobile';
}
function AuthButton({ mode, ...delegated }: AuthButtonProps) {
  const router = useRouter();
  const user = useUser();
  const userDispatch = useUserActions();

  const shouldSignIn = !user?.isLoggedIn;
  const isDesktop = mode === 'desktop';

  function handleSignOut(
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    e.preventDefault();
    if (userDispatch) {
      userDispatch({
        type: USER_ACTION.RESET,
      });
    }
    router.push('/');
  }

  function handleSignIn(e: React.MouseEvent<HTMLButtonElement>) {
    router.push('/signin');
  }

  if (!shouldSignIn) {
    return (
      <>
        {isDesktop ? (
          <React.Suspense fallback={<Spinner />}>
            <UnstyledButton onClick={handleSignOut}>
              <LogOut size={24} />
              <VisuallyHidden>Sign out</VisuallyHidden>
            </UnstyledButton>
          </React.Suspense>
        ) : (
          <a href='/' onClick={handleSignOut} {...delegated}>
            Sign Out
          </a>
        )}
      </>
    );
  }

  return (
    <>
      {isDesktop ? (
        <UnstyledButton onClick={handleSignIn}>
          <LogIn size={24} />
          <VisuallyHidden>Sign in</VisuallyHidden>
        </UnstyledButton>
      ) : (
        <a href='/signin' {...delegated}>
          Sign In
        </a>
      )}
    </>
  );
}

export default AuthButton;
