export interface Item {
  title: string;
  slug: string;
  nextMenuItems?: Item[];
}
export const MENU_ITEMS: Item[] = [
  {
    title: 'Products',
    slug: '/products',
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
