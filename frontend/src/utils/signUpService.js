/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen som kommuniserer med API i backend for å registrere seg
 * @exports signup
 */

import http from './http';

/**
 * @param  {} credentials data som skal brukes til å opprette kategori
 */
export const signup = async (credentials) => {
  try {
    return await http.post('/users', { ...credentials });
  } catch (err) {
    return err.response;
  }
};
