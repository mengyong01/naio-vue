import { DeptModel, AddDeptModel } from '@/api/dept/DeptModel'
import { ref } from 'vue'
import { EditType } from '@/utils/baseEnum'
import addAndEditVue from '@/views/system/department/addAndEdit.vue'

export default function useDept() {

    const addAndEditDeptRef = ref<{ show: (type: string) => void }>()
    // 下面这种方式在npm run build时会报错
    // const addAndEditDeptRef = ref<InstanceType<typeof addAndEditVue>>()
    //搜索
    const searchBtn = () => {
        console.log('searchBtn func')
    }
    //新增
    const addBtn = () => {
        console.log('addBtn')
        addAndEditDeptRef.value?.show(EditType.ADD);
    }
    //编辑
    const editBtn = (row: DeptModel) => {
        console.log('editBtn func', row)
        addAndEditDeptRef.value?.show(EditType.EDIT)
    }
    //删除
    const deleteBtn = (row: DeptModel) => {
        console.log('deleteBtn func')
    }
    //保存（新增、编辑）
    const save = (model: AddDeptModel) => {
        console.log('保存')
        console.log(model)
    }
    return {
        searchBtn,
        addBtn,
        editBtn,
        deleteBtn,
        save,
        addAndEditDeptRef
    }
}