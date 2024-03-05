'use client';

import { ChangeEvent, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styled from 'styled-components';

import { authenticate } from '@/lib/actions';

function SignInPage() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <Main>
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
    </Main>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <LoginButton type='submit' value='Sign In' aria-disabled={pending}>
      Sign In
    </LoginButton>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

const Main = styled.main`
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

const LoginButton = styled.button`
  flex-grow: 2;
  flex-basis: 200px;
`;
export default SignInPage;
