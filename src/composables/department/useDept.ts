import { DeptModel, AddDeptModel } from '@/api/dept/DeptModel'
import { ref } from 'vue'
import { EditType } from '@/utils/baseEnum'

export default function useDept() {

    const addDeptRef = ref<{ show: (type: string) => void }>();
    //搜索
    const searchBtn = () => {

    }
    //新增
    const addBtn = () => {
        addDeptRef.value?.show(EditType.ADD);
    }
    //编辑
    const editBtn = (row: DeptModel) => {
        addDeptRef.value?.show(EditType.EDIT)
    }
    //删除
    const deleteBtn = (row: DeptModel) => {

    }
    //保存
    const save = (model: AddDeptModel) => {
        console.log('保存')
        console.log(model)
    }
    return {
        searchBtn,
        addBtn,
        editBtn,
        deleteBtn,
        addDeptRef,
        save
    }
}