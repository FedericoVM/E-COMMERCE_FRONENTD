import axios from "axios"


const instanceFormData = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BACKEND,
  timeout: 1003000,
  headers: { 'Content-Type': 'multipart/form-data' }
});

export default instanceFormData