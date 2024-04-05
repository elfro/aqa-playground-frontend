'use server';

import React from 'react';

import { Category } from '@/types/category';
import { ApiErrorResp } from '@/types/ApiErrorResp';

import { slugify } from '@/utils/url-helper';
import { getErrorMessage } from '@/utils/error-helper';

export const getProducts = React.cache(async () => {
  const url = `${process.env.BE_URL}/products`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      console.error(await response.json());
      throw new Error('Failed to fetch products');
    }

    const products = await response.json();
    return products.map((p: { [key: string]: number | string }) => ({
      ...p,
      category: {
        title: p.category,
        slug: slugify(p.category.toString()),
      },
    }));
  } catch (error) {
    return {
      error: getErrorMessage(error),
    } as ApiErrorResp;
  }
});

export const getProductCategories = React.cache(
  async (addAllCategory: boolean = true) => {
    const url = `${process.env.BE_URL}/categories`;
    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (!response.ok) {
        console.error(await response.json());
        throw new Error('Failed to fetch product categories');
      }

      const data: string[] = await response.json();
      const categories: Category[] = data.map((category) => ({
        title: category,
        slug: `/shop/${slugify(category)}`,
      }));

      if (addAllCategory) {
        categories.push({ title: 'All', slug: '/shop/products' });
      }

      return categories;
    } catch (error) {
      return {
        error: getErrorMessage(error),
      } as ApiErrorResp;
    }
  }
);

export const getProductById = React.cache(async (id: number) => {
  const url = `${process.env.BE_URL}/products/${id}`;

  try {
    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
      return {
        error: getErrorMessage(`Failed to fetch product by ${id}`),
      } as ApiErrorResp;
    }

    const data = await response.json();

    return {
      ...data,
      category: {
        title: data.category,
        slug: slugify(data.category.toString()),
      },
    };
  } catch (error) {
    console.error(`Failed to fetch product by ${id}`, error);
    return {
      error: getErrorMessage(error),
    } as ApiErrorResp;
  }
});
