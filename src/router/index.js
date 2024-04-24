import {createRouter, createWebHistory} from "vue-router";
import sidebarComponent from "../public/pages/sidebar.component.vue";
const router  = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/home', component: Componet1},
        // { path: '/about', component: Component2},
        // { path: '/', redirect: '/home'},
        { path: '/profile', component: sidebarComponent},
    ]
});
export default router;