import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "../public/pages/login.component.vue";
import registerComponent from "../public/pages/register.component.vue";
import registerInformationComponent from "../public/pages/register-information.component.vue";
import registerInformationSuccessfullyComponent from "../public/pages/register-information-successfully.component.vue";
import homeBusinessmanComponent from "../profiles-managment/components/home-businessman.component.vue";
import homeDriverComponent from "../profiles-managment/components/home-driver.component.vue";
import homeBusinessmanMenuComponent from "../profiles-managment/components/home-businessman-menu.component.vue";
import homeDriverMenuComponent from "../profiles-managment/components/home-driver-menu.component.vue";
import homeProfileBusinessmanComponent from "../public/pages/home-profile-businessman.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/login',component:loginComponent},
        {path:'/register', component:registerComponent},
        {path:'/register/:type', component: registerInformationComponent},
        {path:'/register/successfully', component:registerInformationSuccessfullyComponent},
        { path: '/home-businessman',    component: homeBusinessmanComponent},
        { path: '/home-driver',    component:  homeDriverComponent},
        { path: '/home-businessman-menu',    component: homeBusinessmanMenuComponent},
        { path: '/home-driver-menu',    component:  homeDriverMenuComponent},
        {path:'/',   redirect:'/login'},
        {path:'/',   redirect:'/home-businessman'},
        {path:'/',   redirect:'/home-driver'},


    ]
});
export default router;