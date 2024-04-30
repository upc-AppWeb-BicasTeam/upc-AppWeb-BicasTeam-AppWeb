import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import PrimeVue from "primevue/config";
import router from "./router/index.js";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Column from "primevue/column";
import Sidebar from "primevue/sidebar";
import ToastService from "primevue/toastservice";
import Avatar from "primevue/avatar";

const app = createApp(App);
app.use(PrimeVue,{ripple:true})
    .use(ToastService)
    .use(router)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-table', DataTable)
    .component('pv-column', Column)
    .component('pv-card', Card)

app.mount('#app')