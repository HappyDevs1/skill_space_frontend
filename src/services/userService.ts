import axios from "axios";

const API_BASE_URL = "http://localhost:4000/user";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (userData: FormData) => {
  try {
    const response = await apiClient.post("/create", userData);
    console.log(response.data.user._id);
    return response.data;
  } catch (error) {
    console.error("Error creating a new user", error);
    throw error;
  }
};

export const loginUser = async (userData: FormData) => {
  try {
    const response = await apiClient.post("/login", userData);
    console.log(response.data)

    const token = response.data.loginToken;
    const user = response.data.loggedUser;
    const role = response.data.role;

    console.log("token is: ", token);
    console.log("User is: ", user);

    localStorage.setItem("token", token);
    localStorage.setItem("user", user)
    localStorage.setItem("role", role);

    return response.data.redirectUrl;

    console.log("User logged in successfully");
  } catch (error) {
    console.error("Error login in user", error);
    throw error;
  }
}

export const getUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data.user;
  } catch (error) {
    console.error("Error fetching user by id", error);
    throw error;
  }
};

export const getFeaturedUser = async () => {
  try {
    const response = await apiClient.get("/featured");
    return response.data;
  } catch (error) {
    console.error("Error fetching featured user", error);
  }
}

export const editUser = async (id: string, editedData: any) => {
  try {
    const response = await apiClient.put(`:${id}/edit`, editedData);
    return response.data;
  } catch (error) {
    console.error("Error editing user", error);
    throw error;
  }
};

export const deleteuser = async (id: string) => {
  try {
    const response = await apiClient(`${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user", error);
    throw error;
  }
};