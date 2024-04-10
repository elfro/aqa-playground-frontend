import { getErrorMessage } from '@/helpers/error-helper';
import { ApiErrorResp } from '@/types/ApiErrorResp';
import { ExtendedUser } from '@/types/user.type';

export const getUserById = async (id: number) => {
  const url = `${process.env.BE_URL}/users/${id}`;

  try {
    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
      return {
        error: getErrorMessage(`Failed to fetch user by ${id}`),
      } as ApiErrorResp;
    }

    const data: ExtendedUser = await response.json();

    return data;
  } catch (error) {
    console.error(`Failed to fetch user by ${id}`, error);
    return {
      error: getErrorMessage(error),
    } as ApiErrorResp;
  }
};
