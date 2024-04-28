import axios from "axios";

/*
* Create an Axios instance with a base URL and JSON content type.
* @type {axios. AxiosInstance}
* */
const http = axios.create({
    baseURL : "http://localhost:4000",
    headers:{'Content-type':'application/json'}
});

export default http;