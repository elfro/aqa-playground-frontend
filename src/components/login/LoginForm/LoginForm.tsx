'use client';

import * as React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';
import styled from 'styled-components';
import MainSection from '@/components/layout-wrappers/MainSection/MainSection';
import MaxWidthWrapper from '@/components/layout-wrappers/MaxWidthWrapper/MaxWidthWrapper';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';
function LoginForm() {
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
    <Form action={dispatch}>
      <InputWrapper
        id='username'
        name='username'
        label='Username'
        type='text'
        required
        value={username}
        onChange={handleUsernameChange}
      />

      <InputWrapper
        id='password'
        name='password'
        label='Password'
        hideIcon={true}
        required
        minLength={6}
        value={password}
        onChange={handlePasswordChange}
      />

      <LoginButtonUI />
      <Message>{errorMessage}</Message>
    </Form>
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
      title='Sign in'
      aria-disabled={pending}
    >
      {pending ? <Spinner /> : 'Sign in'}
    </LoginButton>
  );
}

const Form = styled.form`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 600px;
`;

const InputWrapper = styled(Input)`
  flex-grow: 1;
  flex-basis: 200px;
`;

const LoginButton = styled(Button)`
  flex-grow: 2;
  flex-basis: 200px;
`;

const Message = styled.div`
  flex-basis: 100%;
  min-height: 1.5rem;
  text-align: center;
`;

export default LoginForm;
