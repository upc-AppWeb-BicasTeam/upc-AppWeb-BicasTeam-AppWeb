import {createRouter, createWebHistory} from "vue-router";
import DisplayVehiclesCarrierComponent from "../public/pages/display-vehicles-carrier.component.vue";
import loginComponent from "../public/pages/login.component.vue";
import registerComponent from "../public/pages/register.component.vue";
import registerInformationComponent from "../public/pages/register-information.component.vue";
import registerInformationSuccessfullyComponent from "../public/pages/register-information-successfully.component.vue";
import homeProfileBusinessmanComponent from "../public/pages/home-profile-businessman.component.vue";
import homeProfileDriverComponent from "../public/pages/home-profile-driver.component.vue";
import userProfileComponent from "../public/pages/userProfile.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [      
        {path:'/login',component:loginComponent},
        {path:'/register', component:registerComponent},
        {path:'/register/:type', component: registerInformationComponent},
        {path:'/register/successfully', component:registerInformationSuccessfullyComponent},
        { path: '/:id/home-businessman-menu',    component: homeProfileBusinessmanComponent},
        { path: '/:id/home-driver-menu',    component:  homeProfileDriverComponent},
        { path: '/:id/userprofile', component: userProfileComponent},
        { path: '/:id/vehicles-carrier', component: DisplayVehiclesCarrierComponent },
        {path:'/',   redirect:'/login'},

    ]
});
export default router;