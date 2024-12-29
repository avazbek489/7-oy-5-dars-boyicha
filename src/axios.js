import axios from "axios";

const login = axios.create({
  baseURL: "https://auth-rg69.onrender.com/api/",
});

export default login;
