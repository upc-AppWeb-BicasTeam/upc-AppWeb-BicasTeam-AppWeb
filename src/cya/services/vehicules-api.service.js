import http from "../../shared/services/http-common.js";

export class VehiclesApiService{
    getAllVehicles() {
        return http.get('/moviGestion-cya/vehicle');
    }
}