import * as React from 'react';
import StickyHeader from '@/components/StickyHeader';
import { getProductCategories } from '@/api/auth/products';
import { MENU_ITEMS } from '@/constants/pages-data.contants';

async function Header() {
  const productCategories = await getProductCategories();

  const menuItems = MENU_ITEMS.map((item) =>
    item.slug === '/products'
      ? {
          ...item,
          nextMenuItems: [
            ...productCategories,
            { title: 'All', slug: '/products' },
          ],
        }
      : item
  );

  return <StickyHeader menuItems={menuItems} />;
}

export default React.memo(Header);
