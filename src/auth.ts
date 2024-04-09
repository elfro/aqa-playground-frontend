import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { CredentialsSignin } from '@auth/core/errors';
import { z } from 'zod';

import { authConfig } from './auth.config';
import { login } from '@/app/api/auth/auth';

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  username: string;
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
      async authorize(credentials, req) {
        const parsedCredentials = z
          .object({ username: z.string().min(1), password: z.string().min(8) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { username, password } = parsedCredentials.data;
        try {
          const user: LoginResponse = await login(
            username as string,
            password as string
          );

          if (!user) {
            throw new AuthError('Login failed');
          }

          return user;
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
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          username: token.username,
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
