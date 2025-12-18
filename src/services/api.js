import axios from "axios";

const api = axios.create({
  baseURL: "https://learnsphere-mmou.onrender.com/api",
});

export default api;
