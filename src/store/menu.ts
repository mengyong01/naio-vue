import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { getMenuListApi, filterAsyncRoutes } from '../api/menu/menu'

export type MenuState = {
    count: number,
    collapse: boolean,
    menuList: any
}

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => {
        const temp: MenuState = {
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
        return temp
    },
    getters: {
        getMenuList():any{
            return this.menuList;
    },
    },
    actions: {
        setMenuList(routes: Array<RouteRecordRaw>) {
            this.menuList = this.menuList.concat(routes)
        },
        getMenuListActions(router: any) {
            return new Promise((resolve, reject) => {
                //存的是有权限的路由，是一个数组
                getMenuListApi().then(res => {
                    // console.log(res)
                    let accessedRoutes:RouteRecordRaw[]=[];
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