'use client';

import * as React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from '@/components/Button';
import MainSection from '@/components/MainSection';

import { authenticate } from '@/lib/actions';

function SignInPage() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  React.useEffect(() => {
    if (state && state.accessToken !== undefined) {
      router.push('/');
    }
  });

  return (
    <MainSectionWrapper>
      <Wrapper>
        <Title>Sign in</Title>
        <Form action={dispatch}>
          <EmailInput htmlFor='email'>
            Username
            <input
              id='email'
              name='email'
              type='text'
              value={username}
              onChange={handleUsernameChange}
              placeholder='Enter username...'
              required={true}
            />
          </EmailInput>
          <PasswordInput htmlFor='password'>
            Password
            <input
              type='text'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder='Enter password...'
              required={true}
            />
          </PasswordInput>
          <SubmitButton />
        </Form>
        {state?.error && <div>{state.error}</div>}
      </Wrapper>
    </MainSectionWrapper>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <LoginButton
      size='small'
      variant='outline'
      type='submit'
      value='Sign In'
      aria-disabled={pending}
    >
      Sign In
    </LoginButton>
  );
}

const MainSectionWrapper = styled(MainSection)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  display: block;
`;

const InputGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmailInput = styled(InputGroup)`
  flex-grow: 1;
  flex-basis: 160px;
`;

const PasswordInput = styled(InputGroup)`
  flex-grow: 1;
  flex-basis: 160px;
`;

const LoginButton = styled(Button)`
  flex-grow: 2;
  flex-basis: 200px;
`;
export default SignInPage;
