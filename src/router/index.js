import {createRouter, createWebHistory} from "vue-router";
import carrierReportComponent from "../public/pages/carrier-report.component.vue";
const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/report/view', component: carrierReportComponent},
    ]
});
export default router;