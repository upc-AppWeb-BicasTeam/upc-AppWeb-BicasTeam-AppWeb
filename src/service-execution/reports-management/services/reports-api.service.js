import http from "../../../shared/services/http-common.js";

export class ReportsApiService{
    createReport(jsonUser){
        return http.post('/moviGestion-cya/reports',jsonUser)
    }
    findUserByID(id){
        return http.get(`/moviGestion-iam/users?id=${id}`)
    }
    getAllReports() {
        return http.get('/moviGestion-cya/reports')
    }
}