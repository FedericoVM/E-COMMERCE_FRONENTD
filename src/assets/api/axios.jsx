import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:4123/api",
    timeout: 2000,
    headers : {'Content-type':'application/json'}
})

export default instance