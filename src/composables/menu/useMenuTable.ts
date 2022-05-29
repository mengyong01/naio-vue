import { getTable } from "@/api/menu/menu"
import { onMounted, reactive } from 'vue'

export default function useMenuTable(){
    const menuTable = reactive({
        list: []
    })

    const getMenuTable = async()=>{
        let res = await getTable()
        if(res && res.code == 200){
            menuTable.list = res.data
        }
    }
    onMounted(()=>{
        getMenuTable()
    })

    return {
        menuTable,
        getMenuTable
    }
}