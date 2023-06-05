import axios from "axios"


const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BACKEND,
  timeout: 1003000,
  headers: { 'Content-Type': 'application/json' }
});

export default instance