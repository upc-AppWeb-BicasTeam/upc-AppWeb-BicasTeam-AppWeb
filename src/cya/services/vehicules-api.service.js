import http from "../../shared/services/http-common.js";

export class VehiclesApiService{
    getAllVehicles() {
        return http.get('/moviGestion-cya/vehicle');
    }
    getUsers(){
        return http.get('/moviGestion-iam/users');
    }
}