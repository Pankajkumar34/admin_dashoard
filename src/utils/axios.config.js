import axios from "axios";
const baseUrl = process.env.REACT_APP_API_ENDPOINT

let token = localStorage.getItem("details");
if (token) token = JSON.parse(token)?.Token;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common.Authorization = `bearer ${token}`;
export default axios.create();