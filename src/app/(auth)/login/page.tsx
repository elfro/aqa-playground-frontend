import * as React from 'react';
import LoginForm from '@/components/login/LoginForm';
import type { Metadata } from 'next';
import {
  METADATA_PAGE_DESCRIPTION,
  METADATA_PAGE_TITLE,
} from '@/constants/pages-data.contants';
import LoginPageWrapper from '@/components/login/LoginPageWrapper';
import MainWithCenteredContentSection from '../../../components/layout-wrappers/MainWithCenteredContentSection';

export const metadata: Metadata = {
  title: `Login | ${METADATA_PAGE_TITLE}`,
  description: METADATA_PAGE_DESCRIPTION,
};

function SignInPage() {
  return (
    <MainWithCenteredContentSection>
      <LoginPageWrapper>
        <h1>Sign in</h1>
        <LoginForm />
      </LoginPageWrapper>
    </MainWithCenteredContentSection>
  );
}

export default SignInPage;
