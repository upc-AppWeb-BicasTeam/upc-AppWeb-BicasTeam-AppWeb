import {createRouter, createWebHistory} from "vue-router";
import DisplayVehiclesComponent from "../public/pages/display-vehicles.component.vue";
const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/display', component: DisplayVehiclesComponent}
    ]
});
export default router;