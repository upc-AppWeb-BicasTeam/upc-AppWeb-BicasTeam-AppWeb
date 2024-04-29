import {createRouter, createWebHistory} from "vue-router";
import userProfileComponent from "../public/pages/userProfile.component.vue";
const router  = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/home', component: Componet1},
        // { path: '/about', component: Component2},
        // { path: '/', redirect: '/home'},
        { path: '/userprofile', component: userProfileComponent},
    ]
});
export default router;