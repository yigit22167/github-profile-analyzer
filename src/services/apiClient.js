import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default apiClient;
