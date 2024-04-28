import {createRouter, createWebHistory} from "vue-router";
import OrganizationShipmentComponent from "../public/pages/organization-shipment.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/organization', component: OrganizationShipmentComponent}
    ]
});
export default router;