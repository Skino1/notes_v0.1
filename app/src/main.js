import { createApp } from 'vue'
import store from "./store";
import App from './App.vue'
import Modal from './assets/script/actions.js'
import "./index.css";


const app = createApp(App)
app.use(store);
app.mount('#app')

new Modal();

