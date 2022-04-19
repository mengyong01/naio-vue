import { defineStore } from 'pinia'
import { login } from '../api/login'
import { Types } from './types'
import router from '../router'

export const useUserStore = defineStore({
    id: Types.USER,
    state: () => {
        return {
            token: localStorage.getItem('token') || ''
        }
    },
    // computed 修改state的值, 有缓存的
    getters: {

    },
    //既可以同步也可以异步，提交state
    actions: {
        setToken(token: string) {
            this.$state.token = token
            localStorage.setItem('token', token)
        },
        login(userinfo:any){
            return new Promise((resolve, reject)=>{
                login(userinfo).then((res)=>{
                    this.setToken(res.data.token)
                    router.replace('/')
                    resolve(res)
                }).catch((err)=>{
                    reject(err)
                })
            })
        }
    },
    // 开启数据缓存，此处使用了pinia-plugin-persist插件
    persist: {
        enabled: true,
        strategies: [
            {
                key: Types.USER,
                storage: localStorage,
                paths: ['token']
            }
        ]
    }
})