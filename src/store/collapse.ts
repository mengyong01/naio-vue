import { InjectionKey } from "vue"
import { defineStore, Store } from 'pinia'

export interface State {
    count: number,
    collapse: boolean
}

// export const key: InjectionKey<Store<State>> = Symbol()

export const useCollapseStore = defineStore({
    id: "collapse",
    state:()=>{
        return {
            count: 0,
            collapse: false
        }
    },
    getters:{
        getCount():number{
            return this.count
        },
        getCollapse():boolean {
            return this.collapse
        }
    },
    actions: {
        setCount(count: number){
            this.$state.count = count
        },
        setCollapse(collapse: boolean){
            this.$state.collapse = collapse
        }
    }
})