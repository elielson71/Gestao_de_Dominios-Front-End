import axios from "axios";

export const api = axios.create({
     baseURL: process.env.VUE_APP_BASE_URL,
     validateStatus:(status)=> {
        return status < 500;
    },})

 