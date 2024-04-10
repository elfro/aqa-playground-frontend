import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { CredentialsSignin } from '@auth/core/errors';
import { z } from 'zod';

import { authConfig } from './auth.config';
import { login } from '@/app/api/auth/auth';
import { getUserById } from '@/app/api/user/user';
import { random } from '@/helpers/range-helper';
import { ExtendedUser } from '@/types/user.type';
import { ApiErrorResp } from '@/types/ApiErrorResp';

type LoginResponse = {
  token: string;
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // ToDO: fix
      // @ts-ignore
      async authorize(credentials, req) {
        const parsedCredentials = z
          .object({ username: z.string().min(1), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { username, password } = parsedCredentials.data;
        try {
          const token: LoginResponse = await login(
            username as string,
            password as string
          );

          if (!token) {
            throw new AuthError('Login failed');
          }

          // since fakestoreapi has the predefined list of users, we'll use first 10
          const randomId = random(1, 10);
          const user: ExtendedUser | ApiErrorResp = await getUserById(3);

          if ('error' in user) {
            throw new AuthError('Login failed');
          }
          // const { password: pwd, ...user } = userData;

          return { ...token, user };
        } catch (e) {
          throw new CredentialsSignin(e.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user };
    },
    // ToDO: fix
    // @ts-ignore
    async session({ session, token, user }) {
      const { password, __v, ...userData } = token.user;
      return {
        ...session,
        user: {
          ...session.user,
          ...userData,
          accessToken: token.token,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  basePath: '/api/auth',
  trustHost: true,
});
