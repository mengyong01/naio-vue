import { defineStore } from 'pinia'
import { loginApi } from '../api/user/user'
import { Types } from './types'
import { LoginParm } from '../api/user/userModel'
import { Result } from "../http/request"
import { setToken, setUserId, setExpireTime } from '../utils/auth'

export const useUserStore = defineStore({
    id: Types.USER,
    state: () => {
        return {
            token: localStorage.getItem('token') || '',
            userId: 0
        }
    },
    // computed 修改state的值, 有缓存的
    getters: {
        getToken():string{
            return this.token
        }
    },
    //既可以同步也可以异步，提交state
    actions: {
        setToken(token: string) {
            this.$state.token = token
            localStorage.setItem('token', token)
        },
        setUserId(userId:number){
            this.$state.userId = userId
        },
        login(userinfo:LoginParm){
            return new Promise<Result>((resolve, reject)=>{
                loginApi(userinfo).then((res)=>{
                    // debugger
                    // res::
                    // {
                    //     error_code: 0,
                    //     access_token:
                    //     expires_in:
                    //     token_type:
                    //     msg: 'ok'
                    // }
                    if(res.error_code == 0) {
                        this.setToken(res.data.access_token)
                        this.setUserId(1)

                        setToken(res.data.access_token)
                        setUserId(1)
                        setExpireTime(res.data.expires_in)
                    }
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