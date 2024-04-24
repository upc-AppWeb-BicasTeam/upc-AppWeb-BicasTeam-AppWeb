import http from "../../shared/services/http-common.js";

export class ReportsApiService{
    getReports(){
        return http.get("/driver");
    }
}