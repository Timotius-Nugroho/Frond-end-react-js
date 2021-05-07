import axiosApiIntances from "../../utils/axios";

export const getAllMovie = (page, limit, sortBy, search) => {
  return {
    type: "GET_ALL_MOVIE",
    payload: axiosApiIntances.get(
      `movie?page=${page}&limit=${limit}&keywords=${search}&sort=${sortBy}`
    ),
  };
};
