// // axiosConfig.js
import axios from "axios";
import { setCookie, getCookie, removeCookie } from "../Utils/utils.js";
const apiUrl = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: apiUrl, // Set your API base URL
  withCredentials: true, // Send cookies with cross-origin requests
  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    // You can add any other default headers here
  },
});

instance.interceptors.request.use((config) => {
  const token = getCookie("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
