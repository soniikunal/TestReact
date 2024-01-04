import axios, { createInstance } from "./axiosConfig.js";
import { toastError, toastSuccess } from "../Utils/Toasts.js";

const baseURL = "/admin"; 
const preRoute = "/presTest"; 
const ImageInstance = createInstance({
  "Content-Type": "multipart/form-data",
});

export const GetCategories = async () => {
  try {
    const response = await axios.get(`${baseURL}/allCategories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddCategory = async (name) => {
  try {
    const response = await axios.post(`${baseURL}/addCategory`, { name });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateCategory = async (categoryId, name) => {
  try {
    const response = await axios.put(
      `${baseURL}/updateCategory/${categoryId}`,
      { name }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(`${baseURL}/delCategory/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddQuestion = async (questionData) => {
  try {
    const response = await ImageInstance.post(
      `${baseURL}/addQuestion`,
      questionData
    );
    toastSuccess(response.data.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const EditQuestion = async (questionId, questionData) => {
  try {
    const response = await ImageInstance.put(
      `${baseURL}/updateQuestion/${questionId}`,
      questionData
    );
    toastSuccess(response.data.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetQuestions = async (searchIpt) => {
  try {
    const response = await axios.get(
      `${baseURL}/getQuestions?search=${searchIpt}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DelQuestion = async (categoryId) => {
  try {
    const response = await axios.delete(`${baseURL}/delQuestion/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const setPreTestQuestion = async () => {
  try {
    const response = await axios.get(`${preRoute}/test`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSelectedAnswers = async (userId, data) => {
  try {
    const response = await axios.put(
      `${preRoute}/updateSelectedAnswers/${userId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const calculateScore = async (userId) => {
  try {
    const response = await axios.post(`${preRoute}/calculatePre/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const setATDTestQuestion = async () => {
  try {
    const response = await axios.get("/auth/ATDtest");
    return response.data;
  } catch (error) {
    throw error;
  }
};
