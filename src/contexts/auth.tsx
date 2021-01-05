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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      setUser(null);
      setLoading(true);
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      setLoading(!!storagedUser);
      if (storagedUser && storagedToken) {
        setUser({'email':storagedUser});
        setLoading(false);
      }
    };
    loadStorageData();
  }, []);

  async function signIn(infoLogin: auth.FazerLogin)  {
    const response = JSON.parse(await auth.login(infoLogin));
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
    return;
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

