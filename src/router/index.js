import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "../public/pages/login.component.vue";
import registerComponent from "../public/pages/register.component.vue";
import registerInformationComponent from "../public/pages/register-information.component.vue";
import registerInformationSuccessfullyComponent from "../public/pages/register-information-successfully.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/login',component:loginComponent},
        {path:'/register', component:registerComponent},
        {path:'/register/:type', component: registerInformationComponent},
        {path:'/register/successfully', component:registerInformationSuccessfullyComponent},
        {path:'/',redirect:'/login'}
    ]
});
export default router;