export type ExtendedUser = {
  accessToken: string | unknown;
  refreshToken?: string | null;
  username?: string | null;

  id: number;
  email: string;
  password: string;
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
  __v: number;
};
