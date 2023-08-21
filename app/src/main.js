import { createApp } from 'vue'
import store from "./store";
import App from './App.vue'
import Modal from './assets/script/actions.js'
import "./index.css";


const app = createApp(App)
app.use(store);
app.mount('#app')

new Modal();

async function getNotes () {
      try {
        let elements = this.$store.state.notes;
        const resp = await fetch('http://localhost:3001/notes')
        elements = await resp.json();
        console.log(elements);
      } catch (error) {
        console.error();
      }
    }

getNotes()
