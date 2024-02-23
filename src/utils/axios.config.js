// import axios from "axios";
// const baseUrl = process.env.REACT_APP_API_ENDPOINT

// let token = localStorage.getItem("details");
// if (token) token = JSON.parse(token)?.Token;
// axios.defaults.baseURL = baseUrl;
// axios.defaults.headers.common.Authorization = `bearer ${token}`;
// export default axios.create();
import axios from "axios";

const baseUrl = "https://motivation-backend-1.onrender.com/api/";
console.log(baseUrl,"oo")
const token = localStorage.getItem("details") ? JSON.parse(localStorage.getItem("details")).Token : null;

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        common: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    }
});

export default instance;
