import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Toolbar from "primevue/toolbar";
import router from "./router/index.js";
import ToastService from "primevue/toastservice";
import DataTable from "primevue/datatable";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card";
import ConfirmDialog from "primevue/confirmdialog";
import Avatar from "primevue/avatar";
import DataView from "primevue/dataview";
import Column from "primevue/column";
import Button from "primevue/button";
import Row from "primevue/row";
import FileUpload from "primevue/fileupload";
import Message from "primevue/message";

const app = createApp(App);

app.use(PrimeVue,{ripple:true})
    .use(ToastService)
    .use(router)
    .component('pv-sidebar', Sidebar)
    .component('pv-dialog', Dialog)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-table', DataTable)
    .component('pv-data-view', DataView)
    .component('pv-column', Column)
    .component('pv-button', Button)
    .component('pv-row', Row)
    .component('pv-file-upload', FileUpload)
    .component('pv-message', Message)
app.mount('#app')