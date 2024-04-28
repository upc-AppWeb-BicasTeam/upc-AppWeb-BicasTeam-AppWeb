import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "../public/pages/login.component.vue";
import registerComponent from "../public/pages/register.component.vue";
import registerInformationComponent from "../public/pages/register-information.component.vue";
import registerInformationSuccessfullyComponent from "../public/pages/register-information-successfully.component.vue";
<<<<<<< HEAD
import homeBusinessmanComponent from "../profiles-managment/components/home-businessman.component.vue";
import homeDriverComponent from "../profiles-managment/components/home-driver.component.vue";
=======
>>>>>>> parent of f71b192 (fix(components ubication): fix componets in profiles managment bounded context)

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/login',component:loginComponent},
        {path:'/register', component:registerComponent},
        {path:'/register/:type', component: registerInformationComponent},
        {path:'/register/successfully', component:registerInformationSuccessfullyComponent},
<<<<<<< HEAD
        { path: '/home-businessman',    component: homeBusinessmanComponent},
        { path: '/home-carrier',    component: homeDriverComponent},
        {path:'/',redirect:'/login'},


=======
        {path:'/',redirect:'/login'}
>>>>>>> parent of f71b192 (fix(components ubication): fix componets in profiles managment bounded context)
    ]
});
export default router;