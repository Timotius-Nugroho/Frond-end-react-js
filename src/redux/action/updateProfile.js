import axiosApiIntances from "../../utils/axios";

export const updateProfile = (data) => {
  return {
    type: "UPDATE",
    payload: axiosApiIntances.post("user", data),
  };
};
