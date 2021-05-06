import axiosApiIntances from "../../utils/axios";

export const getAllMovie = (page, limit) => {
  return {
    type: "GET_ALL_MOVIE",
    pyload: axiosApiIntances.get(`movie?page=${page}&limit=${limit}`),
  };
};
