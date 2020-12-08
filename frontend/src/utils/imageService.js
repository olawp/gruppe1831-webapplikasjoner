/**
 * @author Ola Wethal Petersen
 * @desc Metoder som beskriver hvordan vi skal håndtere bilder som blir laster opp og lastet ned.
 * @exports upload download
 */
import http from './http';

const API_UPLOAD = '/upload';
const API_DOWNLOAD = '/download';

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_UPLOAD}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD}/${id}`, {
      responseType: 'blob',
    });
  } catch (error) {
    return error.response;
  }
};
