import {createRouter, createWebHistory} from "vue-router";
import ReportViewComponent from "../public/pages/report-view.component.vue";
const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/report/view', component: ReportViewComponent},
    ]
});
export default router;