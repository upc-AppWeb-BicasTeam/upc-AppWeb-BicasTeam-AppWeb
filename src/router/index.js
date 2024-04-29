import {createRouter, createWebHistory} from "vue-router";
import DisplayVehiclesCarrierComponent from "../public/pages/display-vehicles-carrier.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home/vehicles-carrier', component: DisplayVehiclesCarrierComponent }
    ]
});
export default router;