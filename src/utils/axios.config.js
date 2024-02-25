

import axios from "axios";
import { Toastify } from "../erreorToast/toastify";

const baseUrl = "https://motivation-backend-1.onrender.com/api/";

export const TokenGet = () => {
    const token = localStorage.getItem("details") ? JSON.parse(localStorage.getItem("details")).Token : null;
    if (token) {
        return token;
    } else {
        console.log("Token not found in local storage");
        return null;
    }
}

const getAxiosInstance = () => {
    const token = TokenGet();
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
            common: {
                Authorization: token ? `Bearer ${token}` : undefined
            }
        }
    });
    return instance;
};

export default getAxiosInstance;

