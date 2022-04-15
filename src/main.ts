import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './styles/index.less'
import './permission'

const app = createApp(App)
app.use(store).use(router)

app.mount('#app')