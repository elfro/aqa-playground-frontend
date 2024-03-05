import * as React from 'react';

import FooterWrapper from '../FooterWrapper';
import { getProductCategories } from '@/api/auth/products';

async function Footer() {
  const links = await getProductCategories();
  return (
    <FooterWrapper>
      <ul>
        {Array.isArray(links) &&
          links.map((link: string, index: number) => (
            <li key={index}>{link}</li>
          ))}
      </ul>
    </FooterWrapper>
  );
}

export default Footer;
