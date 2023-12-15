import axios from "axios";

const instance = axios.create({
  baseURL: "https://phone-catalog-api-ifht.onrender.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
