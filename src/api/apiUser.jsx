import axios from "axios"
import instance from "../axios/instance"

export const login = async (user) => {
    try {
        const res = await instance.post("/usuario/login", user)
        return res
    } catch (error) {
        console.log(error);
    }
}