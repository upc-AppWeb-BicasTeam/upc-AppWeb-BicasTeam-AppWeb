import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import PrimeVue from "primevue/config";
import router from "./router/index.js";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Card from "primevue/card";
import Dialog from "primevue/dialog";

const app = createApp(App);
app.use(PrimeVue,{ripple:true})
    .use(router)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-table', DataTable)
    .component('pv-column', Column)
    .component('pv-card', Card)
    .component('pv-dialog', Dialog)

app.mount('#app')