import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

//私有路由表
export const privateRoutes = [

]

const publicRotues: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'A',
        component: () => import('../views/Index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: publicRotues
})

export default router
