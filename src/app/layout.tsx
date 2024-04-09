import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import GlobalStyles from '@/components/GlobalStyles/GlobalStyles';
import Providers from '@/components/Providers/Providers';
import GlobalPageWrapper from '@/components/layout-wrappers/GlobalPageWrapper';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Spacer from '@/components/ui/Spacer';
import {
  METADATA_PAGE_DESCRIPTION,
  METADATA_PAGE_TITLE,
} from '@/constants/pages-data.contants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Homepage | ${METADATA_PAGE_TITLE}`,
  description: METADATA_PAGE_DESCRIPTION,
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Providers>
        <GlobalStyles />
        <body className={inter.className}>
          <GlobalPageWrapper>
            <React.Suspense>
              <Header />
            </React.Suspense>
            {children}
            <Spacer $size={64} />
            <React.Suspense>
              <Footer />
            </React.Suspense>
          </GlobalPageWrapper>
        </body>
      </Providers>
    </html>
  );
}

export default RootLayout;
