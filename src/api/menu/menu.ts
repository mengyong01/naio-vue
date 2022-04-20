import http from "../../http/http"
import Layout from '../../layout/Index.vue'
import { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('../../views/**/*.vue')

enum Api {
    getMenuList = '/api/sysUser/getMenuList'
}
export const getMenuListApi = async ()=>{
    return await http.get(Api.getMenuList)
}

export function filterAsyncRoutes(routes: RouteRecordRaw[], router: any) {
    const res: Array<RouteRecordRaw> = []
    //循环每一个路由
    routes.forEach((route: any) => {
        const tmp = { ...route }
        const component = tmp.component;
        if (route.component) {
            if (component == 'Layout') {
                tmp.component = Layout;
            } else {
                tmp.component = modules[`../../views${component}.vue`]
            }
        }
        //判断是否有下级
        if (tmp.children) {
            tmp.children = filterAsyncRoutes(tmp.children, router)
        }
        router.addRoute(tmp)
        res.push(tmp)
    })
    return res
}