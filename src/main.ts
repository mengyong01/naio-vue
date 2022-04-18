import { createApp, createVNode } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as Icons from '@element-plus/icons-vue'

// element-plus
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 初始化样式
import './styles/index.less'
// import './permission'

// 引入svg注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(store).use(router)

app.mount('#app')



const Icon = (props: { icon: string }) => {
    const { icon } = props;
    return createVNode(Icons[icon as keyof typeof Icons]);
};

app.component('Icon', Icon)