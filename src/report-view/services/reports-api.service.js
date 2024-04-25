import http from "../../shared/services/http-common.js";

export class ReportsApiService{
    getAllReports(){
        return http.get('/driver');
    }
}