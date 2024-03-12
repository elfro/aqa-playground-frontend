import * as React from 'react';

import FooterWrapper from '../FooterWrapper';
import { getProductCategories } from '@/api/auth/products';

async function Footer() {
  const links: { title: string; slug: string }[] = await getProductCategories();
  return (
    <FooterWrapper>
      <ul>
        {Array.isArray(links) &&
          links.map((link, index: number) => <li key={index}>{link.title}</li>)}
      </ul>
    </FooterWrapper>
  );
}

export default Footer;
