import axios from "axios";
require("dotenv").config();

const axiosApiIntances = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/api/v1/`,
});

export default axiosApiIntances;
