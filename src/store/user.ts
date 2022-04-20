import { defineStore } from 'pinia'
import { loginApi, getInfoApi } from '../api/user/user'
import { Types } from './types'
import { LoginParm } from '../api/user/userModel'
import { Result } from "../http/request"
import { setToken as baseSetToken, setUserId, setExpireTime, getToken } from '../utils/auth'


export type UserState = {
    token: string,
    userId: string,
    permissions: string[]
}

export const useUserStore = defineStore({
    id: Types.USER,
    state: () => {
        let data: UserState = {
            token: getToken() || '',
            userId: '',
            permissions: []
        }
        return data
    },
    // computed 修改state的值, 有缓存的
    getters: {
        getToken(): string {
            return this.token
        },
        getPermissions():any[]{
            return this.permissions
        }
    },
    //既可以同步也可以异步，提交state
    actions: {
        setToken(token: string) {
            this.$state.token = token
        },
        setUserId(userId: string) {
            this.$state.userId = userId
        },
        login(userinfo: LoginParm) {
            return new Promise<Result>((resolve, reject) => {
                loginApi(userinfo).then((res) => {
                    // debugger
                    // res::
                    // {
                    //     error_code: 0,
                    //     access_token:
                    //     expires_in:
                    //     token_type:
                    //     msg: 'ok'
                    // }
                    if (res.data.code == 200) {
                        // debugger
                        // 设置到pinia中
                        this.setToken(res.data.token)
                        this.setUserId((res.data.id).toString())

                        //存储到sessionStorage
                        baseSetToken(res.data.token)
                        setUserId(res.data.id)
                        setExpireTime(res.data.expireTime)
                    }
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        //获取用户信息
        getInfo() {
            return new Promise((resolve, reject) => {
                getInfoApi().then(res => {
                    // debugger
                    //设置权限
                    this.setPermissions(res.data.roles)
                    resolve(res.data)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        setPermissions(roles:any[]){
            this.$state.permissions = roles
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