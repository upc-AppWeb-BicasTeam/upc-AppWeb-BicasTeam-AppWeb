import http from "../../shared/services/http-common.js";

export class VehiclesApiService{
    getAllVehicles() {
        return http.get('/moviGestion-cya/vehicle');
    }
    getVehiclesById(id){
        return http.get(`/moviGestion-iam/${id}`)
    }
    getUsers(){
        return http.get('/moviGestion-iam/users');
    }

    getVehicleByName(name){
        return http.get(`/moviGestion-cya/vehicles?model=${name}`);
    }

    addVehicle(vehicle){
        return http.post("/moviGestion-cya/vehicles",vehicle);
    }

    deleteVehicle(id){
        return http.delete(`/moviGestion-cya/vehicles/${id}`);
    }

    assignVehicleToCarrier(vehicleId,carrierId){
        return http.put(`/moviGestion-cya/vehicles/${vehicleId}`,{carrierId});
    }
}