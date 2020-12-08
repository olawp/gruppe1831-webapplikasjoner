/**
 * @author Ola Wethal Petersen
 * @dec Service som poster brukerinfo til backenden via et axios kall vi får fra http
 * @exports getUserInfo login logout
 */

import http from './http';

export const getUserInfo = async () => {
  try {
    return await http.get('/me');
  } catch (err) {
    return err.response;
  }
};

export const login = async (credentials) => {
  try {
    return await http.post('/login', { ...credentials });
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    return await http.post('/logout');
  } catch (err) {
    return err.response;
  }
};
