import { createApp } from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css'
import store from './store/store'

const app = createApp(App)
app.use(store)
app.mount('#app')
