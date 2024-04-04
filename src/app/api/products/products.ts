'use server';

import React from 'react';
import { cookies } from 'next/headers';

import { slugify } from '@/utils/url-helper';

export const getProducts = React.cache(async () => {
  const url = `${process.env.BE_URL}/products`;
  try {
    const response = await fetch(url, {
      method: 'GET',
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
  const url = `${process.env.BE_URL}/categories`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (response.ok) {
      const categories: string[] = await response.json();
      return categories.map((category) => ({
        title: category,
        slug: `/shop/${slugify(category)}`,
      }));
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch product categories', error);
  }
});

async function getAuthToken() {
  return cookies().get('accessToken')?.value;
}

export const getProductById = React.cache(async (id: number) => {
  const url = `${process.env.BE_URL}/products/${id}`;

  try {
    const response = await fetch(url, { method: 'GET' });

    if (response.ok) {
      const data = await response.json();

      return {
        ...data,
        category: {
          title: data.category,
          slug: slugify(data.category.toString()),
        },
      };
    }
  } catch (error) {
    console.error(`Failed to fetch product by ${id}`, error);
  }
});
