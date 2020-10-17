import axios from "axios";

const api = axios.create({
  baseURL: "http://10.10.10.38:5500",
});

export default api;
