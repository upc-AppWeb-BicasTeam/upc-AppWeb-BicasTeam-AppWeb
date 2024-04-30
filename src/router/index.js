import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "../public/pages/login.component.vue";
import registerComponent from "../public/pages/register.component.vue";
import registerInformationComponent from "../public/pages/register-information.component.vue";
import registerInformationSuccessfullyComponent from "../public/pages/register-information-successfully.component.vue";
import homeBusinessmanComponent from "../profiles-managment/components/home-businessman.component.vue";
import homeDriverComponent from "../profiles-managment/components/home-driver.component.vue";
import homeProfileBusinessmanComponent from "../public/pages/home-profile-businessman.component.vue";
import homeProfileDriverComponent from "../public/pages/home-profile-driver.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/login',component:loginComponent},
        {path:'/register', component:registerComponent},
        {path:'/register/:type', component: registerInformationComponent},
        {path:'/register/successfully', component:registerInformationSuccessfullyComponent},
        { path: '/home-businessman',    component: homeBusinessmanComponent},
        { path: '/home-driver',    component:  homeDriverComponent},
        { path: '/home-businessman-menu',    component: homeProfileBusinessmanComponent},
        { path: '/home-driver-menu',    component:  homeProfileDriverComponent},
        { path: '/userprofile', component: userProfileComponent},
        {path:'/',   redirect:'/login'},

    ]
});
export default router;