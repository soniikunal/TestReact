import axios, { createInstance } from "./axiosConfig.js";
import { toastError, toastSuccess } from "../Utils/Toasts.js";

const baseURL = "/admin";
const preRoute = "/presTest";
const atdRoute = "/atdTest";
const scoreRoute = "/admin/userRecord";
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

export const AddATDQuestion = async (questionData) => {
  try {
    const response = await ImageInstance.post(
      `${baseURL}/ATD/addQuestion`,
      questionData
    );
    toastSuccess(response.data.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const EditATDQuestion = async (questionId, questionData) => {
  try {
    const response = await ImageInstance.put(
      `${baseURL}/ATD/updateQuestion/${questionId}`,
      questionData
    );
    toastSuccess(response.data.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetATDQuestions = async (searchIpt) => {
  try {
    const response = await axios.get(
      `${baseURL}/ATD/getQuestions?search=${searchIpt}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DelATDQuestion = async (categoryId) => {
  try {
    const response = await axios.delete(
      `${baseURL}/ATD/delQuestion/${categoryId}`
    );
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

export const updateSelectedAnswers = async (data) => {
  try {
    const response = await axios.put(`${preRoute}/updateSelectedAnswers`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const calculateScore = async () => {
  try {
    const response = await axios.post(`${preRoute}/calculatePre`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const setATDTestQuestion = async () => {
  try {
    const response = await axios.get(`${atdRoute}/test`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSelectedATDAnswers = async (data) => {
  try {
    const response = await axios.put(`${atdRoute}/updateSelectedAnswers`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const calculateATDScore = async () => {
  try {
    const response = await axios.post(`${atdRoute}/calculateATD`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetUserScores = async () => {
  try {
    const response = await axios.get(`${scoreRoute}/getUsers`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitTypingScore = async (data) => {
  try {
    const response = await axios.post(`${atdRoute}/typingscore`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTypingScore = async () => {
  try {
    const response = await axios.get(`${atdRoute}/getTypingScore`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddArticleQuestion = async (questionData) => {
  try {
    const response = await axios.post(
      `${baseURL}/addArticle`,
      questionData
    );
    toastSuccess(response.data.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const EditArticleQuestion = async (questionId, questionData) => {
  try {
    const response = await axios.put(
      `${baseURL}/updateArticle/${questionId}`,
      questionData
    );
    toastSuccess(response.data.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetArticleQuestions = async (searchIpt) => {
  try {
    const response = await axios.get(
      `${baseURL}/getArticles?search=${searchIpt}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DelArticleQuestion = async (categoryId) => {
  try {
    const response = await axios.delete(
      `${baseURL}/delArticle/${categoryId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};