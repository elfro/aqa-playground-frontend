'use server';

import React from 'react';
import { cookies } from 'next/headers';

export const getProducts = React.cache(async () => {
  const url = `${process.env.BE_URL}/products`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
      },
    });

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

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch product categories', error);
  }
});
