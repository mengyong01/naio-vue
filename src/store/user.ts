import { defineStore } from 'pinia'
import { Keys } from './keys'

export const useUserStore = defineStore({
    id: Keys.USER,
    state: () => {
        return {
            token: ''
        }
    },
    // computed 修改state的值, 有缓存的
    getters: {
        newName(state): string {
            return `$-${this.name}` + `${state.age}`
        },
        getAge: (state) => {
            return state.age
        }
    },
    //既可以同步也可以异步，提交state
    actions: {
        login() {
        }
    },
    // 开启数据缓存，此处使用了pinia-plugin-persist插件
    persist: {
        enabled: true,
        strategies: [
            {
                key: Keys.USER,
                storage: localStorage,
                paths: ['token']
            }
        ]
    }
})