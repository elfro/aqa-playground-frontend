import { type DefaultSession } from '@auth/core/types';

export type ExtendedUser = {
  accessToken?: string | null;
  refreshToken?: string | null;
  username?: string | null;
} & DefaultSession['user'];

declare module '@auth/core/types' {
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
      username: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultSession['user'] {
    accessToken?: string | null;
    refreshToken?: string | null;
    username?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string | null;
    refreshToken?: string | null;
    username?: string | null;
    user: User;
  }

  interface User extends DefaultSession['user'] {
    accessToken?: string | null;
    refreshToken?: string | null;
    username?: string | null;
  }
}
