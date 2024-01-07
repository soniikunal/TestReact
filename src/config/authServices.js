// AuthService.js
import axios from "./axiosConfig.js";
import { setCookie, getCookie, removeCookie } from "../Utils/utils.js";

export const login = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", { username, password });
    setCookie(response.data.accessToken);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const examLogin = async (registerId, mailId) => {
  try {
    const response = await axios.post("/auth/examLogin", {
      registerId,
      mailId,
    });
    setCookie(response.data.accessToken);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.post("/auth/register", { username, password });
    setCookie(response.data.accessToken);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("/auth/logout");
    removeCookie();
    return response.data;
  } catch (error) {
    throw error;
  }
};
