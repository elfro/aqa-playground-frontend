import * as React from 'react';

import FooterNav from '@/components/footer/FooterNav';

import { getProductCategories } from '@/app/api/products/products';
import { Category } from '@/types/category';

async function Footer() {
  const categories = await getProductCategories();
  const links: Category[] = 'error' in categories ? [] : categories;

  return <FooterNav productCategoryLinks={links} />;
}

export default Footer;
