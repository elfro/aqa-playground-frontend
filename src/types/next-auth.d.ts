import { type DefaultSession } from '@auth/core/types';
import { DefaultJWT } from '@auth/core/jwt';
import { ExtendedUser } from '@/types/user.type';

declare module '@auth/core/types' {
  interface Session {
    user: ExtendedUser & DefaultSession['user'];
  }

  interface User extends DefaultSession['user'] {
    accessToken?: string | null;
    refreshToken?: string | null;
    username?: string | null;

    id: number;
    email: string;
    name: { firstname: string; lastname: string };
    address: {
      city: string | null;
      street: string | null;
      number: number | null;
      zipcode: string | null;
      geolocation: {
        lat: string;
        ling: string;
      } | null;
    };
    phone: string;
  }
}

declare module '@auth/core/jwt' {
  interface JWT extends DefaultJWT {
    accessToken?: string | null;
    refreshToken?: string | null;
    username?: string | null;
    user: ExtendedUser;
  }

  interface User {
    accessToken?: string | null;
    refreshToken?: string | null;
    username?: string | null;

    id: number;
    email: string;
    name: { firstname: string; lastname: string };
    address: {
      city: string | null;
      street: string | null;
      number: number | null;
      zipcode: string | null;
      geolocation: {
        lat: string;
        ling: string;
      } | null;
    };
    phone: string;
  }
}
