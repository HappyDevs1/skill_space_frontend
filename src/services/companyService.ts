import axios from "axios";

const API_BASE_URL = "http://localhost:4000/company";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createCompany = async (userData: FormData) => {
  try {
    const response = await apiClient.post("/create", userData);
    console.log(response.data.company._id);
    return response.data;
  } catch (error) {
    console.error("Error creating a new company", error);
    throw error;
  }
};

export const createFeaturedCompany = async (userData: FormData) => {
  try {
    const response = await apiClient.post("/create-featured", userData);
    console.log(response.data.company._id);
    return response.data;
  } catch (error) {
    console.error("Error creating a new company", error);
    throw error;
  }
};

export const loginCompany = async (userData: FormData) => {
  try {
    const response = await apiClient.post("/login", userData);
    console.log(response.data)

    const token = response.data.loginToken;

    localStorage.setItem("token", token);

    return response.data.redirectUrl;

    console.log("Company logged in successfully");
  } catch (error) {
    console.error("Error login in company", error);
    throw error;
  }
}

export const getCompany = async () => {
  try {
    const response = await apiClient.get("/companies");
    return response.data;
  } catch (error) {
    console.error("Error fetching company", error);
    throw error;
  }
};

export const getCompanyById = async (id: string) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data.company;
  } catch (error) {
    console.error("Error fetching company by id", error);
    throw error;
  }
};

export const getFeaturedCompany = async () => {
  try {
    const response = await apiClient.get("/featured");
    return response.data;
  } catch (error) {
    console.error("Error fetching featured company", error);
  }
}

export const editCompany = async (id: string, editedData: any) => {
  try {
    const response = await apiClient.put(`:${id}/edit`, editedData);
    return response.data;
  } catch (error) {
    console.error("Error editing company", error);
    throw error;
  }
};

export const deleteCompany = async (id: string) => {
  try {
    const response = await apiClient(`${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting comany", error);
    throw error;
  }
};