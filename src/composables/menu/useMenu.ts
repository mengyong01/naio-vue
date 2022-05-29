import { EditType } from "@/utils/baseEnum"
import { ref } from "vue"

export default function useMenu() {
    const addMenuRef = ref<{ show: (type: string, row?: any) => void }>()

    const addBtn = () => {
        addMenuRef.value?.show(EditType.ADD)
    }

    const editBtn = (row: any) => {
        addMenuRef.value?.show(EditType.EDIT, row)
    }

    const deleteBtn = () => {

    }

    const save = () => {

    }

    return {
        addBtn, editBtn, deleteBtn, save, addMenuRef
    }
}