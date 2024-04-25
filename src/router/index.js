import {createRouter, createWebHistory} from "vue-router";
import ReportDriverComponent from "../public/pages/report-driver.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/report/driver', component: ReportDriverComponent},
    ]
});
export default router;