'use server';

import React from 'react';
import { cookies } from 'next/headers';

import { slugify } from '@/utils/url-helper';

export const getProducts = React.cache(async () => {
  const url = `${process.env.BE_URL}/products`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
      },
    });

    if (response.ok) {
      const products = await response.json();
      return products.map((p: { [key: string]: number | string }) => ({
        ...p,
        category: {
          title: p.category,
          slug: slugify(p.category.toString()),
        },
      }));
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch products', error);
  }
});

export const getProductCategories = React.cache(async () => {
  console.log('getting products list');
  const url = `${process.env.BE_URL}/categories`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (response.ok) {
      const categories: string[] = await response.json();
      return categories.map((category) => ({
        title: category,
        slug: `/products/${slugify(category)}`,
      }));
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch product categories', error);
  }
});
