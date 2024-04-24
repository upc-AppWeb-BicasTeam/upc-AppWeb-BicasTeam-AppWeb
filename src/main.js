import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'primevue/resources/themes/md-dark-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from "primevue/config";
import router from "./router/index.js";
import ToastService from "primevue/toastservice";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card";
import ConfirmDialog from "primevue/confirmdialog";
import Avatar from "primevue/avatar";

const app = createApp(App);
app.use(PrimeVue,{ripple:true})
    .use(ToastService)
    .use(router)
    .component('pv-sidebar', Sidebar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-confirm-dialog', ConfirmDialog)
app.mount('#app')