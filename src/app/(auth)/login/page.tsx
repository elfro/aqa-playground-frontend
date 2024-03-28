'use client';

import * as React from 'react';
import styled from 'styled-components';

import Button from '@/components/ui/Button';
import MainSection from '@/components/MainSection';

import { authenticate } from '@/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

function SignInPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <MainSectionWrapper>
      <Wrapper>
        <Title>Sign in</Title>
        <Form action={dispatch}>
          <EmailInput htmlFor='username'>
            Username
            <input
              id='username'
              name='username'
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
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder='Enter password...'
              required={true}
              minLength={6}
            />
          </PasswordInput>
          <LoginButtonUI />
        </Form>
        {errorMessage && <div>{errorMessage}</div>}
      </Wrapper>
    </MainSectionWrapper>
  );
}

function LoginButtonUI() {
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
