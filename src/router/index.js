import {createRouter, createWebHistory} from "vue-router";
import OrganizationShipmentComponent from "../public/pages/organization-shipment.component.vue";
import ViewShipmentsComponent from "../public/pages/view-shipments.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/organization', component: OrganizationShipmentComponent},
        { path: '/organization/view', component: ViewShipmentsComponent},
    ]
});
export default router;