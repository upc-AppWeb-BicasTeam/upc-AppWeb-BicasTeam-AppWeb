import http from "../../shared/services/http-common.js";

export class IamApiService{
    createUser(jsonUser){
        return http.post('/users',jsonUser)
    }
    getAllUsers(){
        return http.get('/users')
    }
    findUserWithEmailAndPassword(email,password){
        return http.get(`/users?email=${email}&password=${password}`)
    }
    findUserWithEmail(email){
        return http.get(`/users?email=${email}`)
    }
}