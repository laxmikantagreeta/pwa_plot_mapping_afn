import axios from "axios";

const instance = axios.create({
  baseURL:"http://192.168.1.95:8000", // backend URL
  // baseURL: "http://localhost:8000", // backend URL
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
