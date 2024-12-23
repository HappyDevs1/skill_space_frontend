import axios from "axios";

const API_BASE_URL = "http://localhost:4000/application";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createApplication = async (formdata: FormData) => {
  try {
    const response = await apiClient.post("/create", formdata);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating a new application", error);
    throw error;
  }
};
