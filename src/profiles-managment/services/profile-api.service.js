import http from "../../shared/services/http-common.js";

export class ProfileApiService {
    getUsers() {
        return http.get('/api/v1/Users');
    }
    createUser(jsonUser) {
        return http.post('/api/v1/Users', jsonUser);
    }
    findUserById(id) {
        return http.get(`/api/v1/Users/${id}`);
    }
    updateUser(id, jsonUser) {
        return http.put(`/api/v1/Users/${id}`, jsonUser);
    }
}