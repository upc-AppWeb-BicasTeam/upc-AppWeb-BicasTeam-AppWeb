import http from "./http-common.js";

export class VehiclesApiService{
    getAllVehicles() {
        return http.get('/vehicles');
    }
}