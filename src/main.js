import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'primevue/resources/themes/md-dark-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'
import 'primeicons/primeicons.css'
import PrimeVue from "primevue/config";
import router from "./router/index.js";
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";

const app = createApp(App);
app.use(PrimeVue,{ripple:true})
    .use(router)
    .component('pv-card', Card)
    .component('pv-table', DataTable)
    .component('pv-column', Column)
    .component('pv-button', Button)
    .component('pv-dialog', Dialog)
    .component('pv-calendar', Calendar)
app.mount('#app')