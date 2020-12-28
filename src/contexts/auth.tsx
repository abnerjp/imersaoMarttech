import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import * as auth from '../services/auth';

interface User {
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      setUser(null);
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  // async function signIn() {
  //   const response = await auth.login();
  //   const { token, user } = response;
  //   //setUser(response.user);
  //   await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
  //   await AsyncStorage.setItem('@RNAuth:token', response.token);
  // }

  async function signIn(infoLogin: auth.FazerLogin)  {
    const response = JSON.parse(await auth.login1(infoLogin));
    if (response.success) {
      setLoading(false);
      setUser({'email':infoLogin.email});
      AsyncStorage.setItem('@RNAuth:user', infoLogin.email);
      AsyncStorage.setItem('@RNAuth:token', response.data.token);
    }
  }

  function signOut() {
    setUser(null);
    AsyncStorage.removeItem('@RNAuth:user');
    AsyncStorage.removeItem('@RNAuth:token');
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, loading, signIn , signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

