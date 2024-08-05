import axios from "axios";

const API_BASE_URL = "http://localhost:4000/service";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createJob = async (jobData: any) => {
  try {
    const response = await apiClient.post("/create", jobData);
    return response.data;
  } catch (error) {
    console.error("Error creating a job", error);
    throw error;
  }
};

export const getAllJobs = async () => {
  try {
    const response = await apiClient.get("/services");
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs", error);
    throw error;
  }
};

export const getJobById = async (id: string) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job by id", error);
    throw error;
  }
};

export const getJobByFilter = async (filterData: any) => {
  try {
    const response = await apiClient.get("/filter", { params: filterData });
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered jobs", error);
    throw error;
  }
};

export const getFeaturedJob = async () => {
  try {
    const response = await apiClient.get("/featured");
    return response.data;
  } catch (error) {
    console.error("Error fetching featured jobs", error);
    throw error;
  }
};

export const editJob = async (id: string, jobData: any) => {
  try {
    const response = await apiClient.put(`/${id}/edit`, jobData);
    return response.data;
  } catch (error) {
    console.error("Error editing job", error);
    throw error;
  }
};

export const deleteJob = async (id: string) => {
  try {
    const response = await apiClient.delete(`/${id}/delete`);
    return response.data;
  } catch (error) {
    console.error("Error deleting job", error);
    throw error;
  }
};
