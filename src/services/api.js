import axios from "axios";
import { getToken } from "./authServices";

export const api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'authorization ': `Bearer ${getToken()}`
    },
    validateStatus: (status) => {
        return status < 500;
    },
})
