'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styled from 'styled-components';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle sign in
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={username}
              onChange={handleUsernameChange}
              placeholder='Username'
            />
            <input
              type='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder='Password'
              required={true}
            />
            <input type='submit' value='Sign In' />
          </form>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

const Wrapper = styled.div``;
export default SignInPage;
