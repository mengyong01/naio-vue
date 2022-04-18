import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

//私有路由表
export const privateRoutes = [

]

const publicRotues: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/Index.vue') 
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: publicRotues
})

export default router
