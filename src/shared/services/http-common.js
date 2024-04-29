import axios from "axios";

/*
* Create an Axios instance with a base URL and JSON content type.
* @type {axios. AxiosInstance}
* */
const http = axios.create({
    baseURL : "https://my-json-server.typicode.com/upc-AppWeb-BicasTeam",
    headers:{'Content-type':'application/json'}
});

export default http;