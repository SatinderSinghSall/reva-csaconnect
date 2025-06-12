import axios from "axios";

const API = axios.create({
  baseURL: "https://csaconnect-backend.onrender.com/api",
});

/*
  > IN Production / Deployment API Link:
  https://csaconnect-backend.onrender.com

  > Development API Link:
  http://localhost:5000/
*/

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
