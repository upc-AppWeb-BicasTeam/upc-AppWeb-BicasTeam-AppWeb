import axios from "axios";
/*
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
* Create an Axios instance with a base URL and JSON content type.
* @type {axios. AxiosInstance}
* */
const http = axios.create({
    baseURL : "http://localhost:3000",
    headers:{'Content-type':'application/json'}
});

export default http;