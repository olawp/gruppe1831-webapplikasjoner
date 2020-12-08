/**
 * @author Ola Wethal Petersen
 * @decs Context som lar oss få tilgang til bruker objektet gjennom hele systemet. Via provideren kan vi lagren en bruker i en state, som vi kan hente ut andre steder i systemet
 * @exports AuthProvider
 */

/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserInfo } from '../utils/authService.js';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserdata = async () => {
      if (user === null) {
        setLoading(true);
        const { data } = await getUserInfo();
        if (data?.success) {
          const currentUser = data.data;
          setUser(currentUser);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    };
    fetchUserdata();
    // console.log(user)
  }, [user]);
  return (
    <Provider
      value={{
        isLoading: loading,
        isAdmin: user?.role === 'admin',
        isLoggedIn: !!user,
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
