'use client';

import * as React from 'react';
import Cookie from 'js-cookie';

export enum USER_ACTION {
  SET = 'SET',
  RESET = 'RESET',
}
interface UserState {
  isLoggedIn: boolean;
  accessToken?: string;
  refreshToken?: string;
  username?: string;
}

interface UserAction {
  type: USER_ACTION;
}
interface UserProvider {
  children: React.ReactNode;
}
const UserContext = React.createContext<UserState | null>(null);
const UserDispatchContext =
  React.createContext<React.Dispatch<UserAction> | null>(null);

function UserProvider({ children }: UserProvider) {
  const [userState, dispatch] = React.useReducer(
    userReducer,
    { isLoggedIn: false },
    initialState
  );

  const presenceCookie = Cookie.get('accessToken');
  if (userState.accessToken !== presenceCookie) {
    dispatch({ type: USER_ACTION.SET });
  }

  return (
    <UserContext.Provider value={userState}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
function userReducer(userState: UserState, action: UserAction): UserState {
  switch (action.type) {
    case USER_ACTION.SET: {
      const cookies = Cookie.get();
      const { accessToken, refreshToken, username } = cookies;

      return {
        ...userState,
        accessToken,
        refreshToken,
        username,
        isLoggedIn: cookies.accessToken !== null,
      };
    }
    case USER_ACTION.RESET: {
      Cookie.remove('accessToken');
      Cookie.remove('refreshToken');
      Cookie.remove('username');

      return {
        isLoggedIn: false,
      };
    }
  }
}

function initialState(): UserState {
  const accessToken = Cookie.get('accessToken');

  return {
    accessToken: accessToken,
    refreshToken: Cookie.get('refreshToken'),
    username: Cookie.get('username'),
    isLoggedIn: accessToken !== undefined,
  };
}
export function useUser() {
  return React.useContext(UserContext);
}
export function useUserActions() {
  return React.useContext(UserDispatchContext);
}
export default UserProvider;
