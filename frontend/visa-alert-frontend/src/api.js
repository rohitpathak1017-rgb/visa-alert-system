import axios from "axios";

const API = axios.create({
  baseURL: "https://visa-alert-system.onrender.com",
});

export default API;
