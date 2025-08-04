import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import  piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.mount('#app')

