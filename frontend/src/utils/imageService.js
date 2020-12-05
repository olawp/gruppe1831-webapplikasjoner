import http from "./http";
const API_UPLOAD = "/upload";
const API_DOWNLOAD = "/download";

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append("image", image);
    return (
      await http.post(`${API_UPLOAD}`, data),
      {
        header: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD}/${id}`, {
      responseType: "blob",
    });
  } catch (error) {
    return error.response;
  }
};
