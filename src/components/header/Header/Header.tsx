import * as React from 'react';

import StickyHeader from '@/components/header/StickyHeader';

import { getProductCategories } from '@/app/api/products/products';

import { MENU_ITEMS } from '@/constants/pages-data.contants';
import { auth } from '@/auth';

async function Header() {
  const session = await auth();
  const productCategories = await getProductCategories();

  const menuItems = MENU_ITEMS.map((item) =>
    item.slug === '/shop/products'
      ? {
          ...item,
          nextMenuItems: [
            ...productCategories,
            { title: 'All', slug: '/shop/products' },
          ],
        }
      : item
  );

  return <StickyHeader menuItems={menuItems} session={session} />;
}

export default React.memo(Header);
