import axios from "axios";
import { showError } from "../utils/toast";

const api = axios.create({
  baseURL: "https://localhost:7267/api",
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth data on unauthorized
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userId");
      window.location.href = "/login";
    }

    
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "An error occurred";
    showError(errorMessage);

    return Promise.reject(error);
  }
);

export default api;