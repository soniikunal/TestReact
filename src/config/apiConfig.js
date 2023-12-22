import axios from "./axiosConfig.js";
const baseURL = '/admin'; // Update with your actual backend URL

export const GetCategories = async () => {
  try {
    const response = await axios.get(`${baseURL}/allCategories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${baseURL}/addCategory`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateCategory = async (categoryId, categoryData) => {
  try {
    const response = await axios.put(`${baseURL}/updateCategory/${categoryId}`, categoryData);
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
    debugger
    try {
      const response = await axios.post(`${baseURL}/addQuestion`, questionData);
      debugger
      return response.data;
    } catch (error) {
      throw error;
    }
  };
