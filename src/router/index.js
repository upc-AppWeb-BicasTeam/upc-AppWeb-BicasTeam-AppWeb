import {createRouter, createWebHistory} from "vue-router";
const router  = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Componet1},
        { path: '/about', component: Componet2},
        { path: '/', redirect: '/home'}
    ]
});
export default router;