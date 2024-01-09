// axiosConfig.js
import axios from "axios";
import { setCookie, getCookie, removeCookie } from "../Utils/utils.js";
const apiUrl = import.meta.env.VITE_API_URL;

const createInstance = (headers) => {
  return axios.create({
    baseURL: apiUrl, // Set your API base URL
    withCredentials: true, // Send cookies with cross-origin requests
    // timeout: 5000, // Set a timeout for requests (optional)
    headers: {
      "Content-Type": "application/json",
      // You can add any other default headers here
      ...headers, // Merge with dynamic headers
    },
  });
};

const instance = createInstance();

instance.interceptors.request.use((config) => {
  const token = getCookie("JwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { createInstance }; // Export the function to create an instance
export default instance;
