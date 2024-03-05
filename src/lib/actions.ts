'use server';

import { signIn } from '@/api/auth/auth';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function authenticate(_currentState: unknown, formData: FormData) {
  let json;
  try {
    json = await signIn(formData);
  } catch (error) {
    return { error: error.message };
  }

  const { username, accessToken, refreshToken } = json;
  await setUserCookies({ username, accessToken, refreshToken });

  revalidatePath('/');

  return json;
}

interface UserData {
  username: string;
  accessToken: string;
  refreshToken: string;
}
export async function setUserCookies(userData: UserData) {
  const cookieOptions: { [key: string]: number | boolean | string } = {
    expires: Date.now() + 60 * 60 * 1000,
    httpOnly: false,
    secure: false,
    sameSite: 'lax',
  };

  const refreshTokenOptions = { ...cookieOptions, httpOnly: true };

  cookies().set('username', userData.username, cookieOptions);
  cookies().set('accessToken', userData.accessToken, cookieOptions);
  cookies().set('refreshToken', userData.refreshToken, refreshTokenOptions);
}
