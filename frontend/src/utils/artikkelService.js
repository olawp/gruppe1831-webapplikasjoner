/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen som kommuniserer med API i backend for artikkel
 * @exports create
 * @exports list
 * @exports get
 * @exports put
 */

import http from './http';

const API_URL = '/articles';

/**
 * @param  {string} url URL'en som skal uthentes
 */
export const list = async (url) => {
  try {
    return await http.get(url);
  } catch (err) {
    return err.response;
  }
};

/**
 * @param  {string} id henter artikkel basert på ID
 */
export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

/**
 * @param  {string} id oppdaterer artikkel basert på ID
 * @param  {} data ny data som skal erstattes
 */
export const put = async (id, data) => {
  try {
    return await http.put(`${API_URL}/${id}`, data);
  } catch (err) {
    return err.response;
  }
};

/**
 * @param  {} data data som skal brukes til å opprette kategori
 */
export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, { ...data });
  } catch (err) {
    return err.response;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, list, get, put };
