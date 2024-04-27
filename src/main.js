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

const app = createApp(App);
app.use(PrimeVue,{ripple:true})
    .use(router)
    .component('pv-card', Card)

app.mount('#app')