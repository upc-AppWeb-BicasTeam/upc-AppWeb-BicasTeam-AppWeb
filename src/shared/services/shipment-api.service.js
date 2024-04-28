import http from "./http-common.js";

export class ShipmentApiService{
    getAllShipments(){
        return http.get('/shipment')
    }
}