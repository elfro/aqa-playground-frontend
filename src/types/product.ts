import { Category } from '@/types/category';

export interface Product {
  id: number;
  title: string;
  price: string;
  quantity: number;
  description: string;
  image: string;
  category: Category;
}
