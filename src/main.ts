import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 初始化样式
import './styles/index.less'
// import './permission'

// 引入svg注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(store).use(router)

app.mount('#app')