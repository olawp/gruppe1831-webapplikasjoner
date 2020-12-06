import http from './http';

export const signup = async (credentials) => {
  try {
    return await http.post('/users', { ...credentials });
  } catch (err) {
    return err.response;
  }
};
