import http from "../../../shared/services/http-common.js";

export class ShipmentApiService{
    createShipment(jsonShipment){
        return http.post('/Shipment', jsonShipment)
    }
    getShipmentById(id){
        return http.get(`/Shipment/${id}`);
    }
    getShipmentByUserId(userId){
        return http.get(`/Shipment/users/${userId}`);
    }
    getAllShipments(){
        return http.get('/Shipment')
    }
    findUserByID(id){
        return http.get(`/Profile/${id}`)
    }
}