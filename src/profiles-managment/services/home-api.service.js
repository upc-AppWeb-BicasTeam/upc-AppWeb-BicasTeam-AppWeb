import http from "../../shared/services/http-common.js";



export class HomeApiService {

    getAllActivities() {
        return http.get('/activities');
    }
    getAllCondition() {
        return http.get('/condition');
    }
    getAllDeliveries() {
        return http.get('/deliveries');
    }
    getAllActivitiesDriver() {
        return http.get('/activities-driver');
    }
    getAllDeliveriesDriver() {
        return http.get('/deliveries-driver');
    }
}