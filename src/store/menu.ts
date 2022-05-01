import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { getMenuListApi } from '../api/menu/menu'
import { Types } from './types'
import Layout from '@/layout/Index.vue'

const modules = import.meta.glob('../views/**/*.vue')

export type MenuState = {
    count: number,
    collapse: boolean,
    menuList: any
}

export const useMenuStore = defineStore({
    id: Types.MENU,
    state: (): MenuState => {
        return {
            count: 0,
            collapse: false,
            menuList: [
                {
                    path: '/dashboard',
                    component: "Layout",
                    meta: {
                        title: "首页",
                        icon: "HomeFilled",
                        roles: ["sys:manage"]
                    },
                    children: []
                }
            ]
        }
    },
    getters: {
        getMenuList(): any {
            return this.menuList;
        },
    },
    actions: {
        setCount(count: number){
            this.count = count
        },
        setCollapse(collapse: boolean){
            this.collapse = collapse
        },
        setMenuList(routes: Array<RouteRecordRaw>) {
            this.menuList = this.menuList.concat(routes)
        },
        getMenuListActions(router: any) {
            return new Promise((resolve, reject) => {
                //存的是有权限的路由，是一个数组
                getMenuListApi().then(res => {
                    let accessedRoutes: RouteRecordRaw[] = [];
                    if (res.code == 200) {
                        accessedRoutes = filterAsyncRoutes(res.data, router)
                    }
                    this.setMenuList(accessedRoutes)
                    resolve(accessedRoutes)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
})

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
                // console.log(component)
                tmp.component = modules[`../views${component}.vue`]
            }
        }
        //判断是否有下级
        if (tmp.children) {
            tmp.children = filterAsyncRoutes(tmp.children, router)
        }
        // console.log(tmp)
        router.addRoute(tmp)
        res.push(tmp)
    })
    console.log(res)
    return res
}