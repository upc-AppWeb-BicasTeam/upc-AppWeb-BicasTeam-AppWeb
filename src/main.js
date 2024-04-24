import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'primevue/resources/themes/md-dark-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from "primevue/config";
import router from "./router/index.js";


const app = createApp(App);
app.use(PrimeVue,{ripple:true})
    .use(router)


app.mount('#app')