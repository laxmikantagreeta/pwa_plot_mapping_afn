import axios from "axios";

const instance = axios.create({
  baseURL: "https://5px2ad4c13.execute-api.ap-south-1.amazonaws.com/", // ← add trailing slash
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
