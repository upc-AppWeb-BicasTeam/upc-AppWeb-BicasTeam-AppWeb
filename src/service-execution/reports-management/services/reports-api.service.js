import http from "../../../shared/services/http-common.js";

export class ReportsApiService{
    findUserByID(id){
        return http.get(`/Profile/${id}`)
    }
    getAllReports() {
        return http.get('/report')
    }
}