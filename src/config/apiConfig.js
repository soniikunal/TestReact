import axios, { createInstance }  from "./axiosConfig.js";
const baseURL = '/admin'; // Update with your actual backend URL
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
    const response = await axios.post(`${baseURL}/addCategory`, {name});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateCategory = async (categoryId, name) => {
  try {
    const response = await axios.put(`${baseURL}/updateCategory/${categoryId}`, {name});
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
      const response = await ImageInstance.post(`${baseURL}/addQuestion`, questionData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const GetQuestions = async (searchIpt) => {
    try {
      const response = await axios.get(`${baseURL}/getQuestions?search=${searchIpt}`);
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
