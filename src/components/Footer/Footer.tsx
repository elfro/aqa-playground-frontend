import * as React from 'react';

import FooterNav from '@/components/FooterNav';

import { getProductCategories } from '@/app/api/products/products';

async function Footer() {
  const links: { title: string; slug: string }[] = await getProductCategories();
  return <FooterNav productLinks={links} />;
}

export default Footer;
