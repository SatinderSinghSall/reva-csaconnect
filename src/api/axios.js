import axios from "axios";

const API = axios.create({
  baseURL: "https://csaconnect-backend.onrender.com/api",
});

export default API;
