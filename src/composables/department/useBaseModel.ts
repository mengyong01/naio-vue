import { AddDeptModel } from "@/api/dept/deptModel"
import { reactive } from "vue"

/**
 * 部门模块基础数据
 */
export default function useBaseModel() {
    //表单验证规则
    const rules = reactive({})

    //表单绑定的数据
    const dialog = reactive<AddDeptModel>({
        type: '',
        id: '',
        pid: '',
        parentName: '',
        manager: '',
        deptAddress: '',
        deptPhone: '',
        name: '',
        deptCode: '',
        orderNum: ''
    })

    return {
        rules,
        dialog
    }
}
