export const METADATA_PAGE_TITLE = 'E2E Playground';
export const METADATA_PAGE_DESCRIPTION =
  'The E2E Playground is a comprehensive testbed designed primarily for passionate SDETs to practice their skills in real-world scenarios';
export interface MenuItem {
  title: string;
  slug: string;
  nextMenuItems?: MenuItem[];
}
export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Products',
    slug: '/shop/products',
  },
  {
    title: 'About Us',
    slug: '/#',
  },
  {
    title: 'Contacts',
    slug: '/#',
  },
  {
    title: 'FAQ',
    slug: '/#',
  },
];
