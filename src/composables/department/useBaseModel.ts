import { reactive } from "vue"

/**
 * 部门模块基础数据
 */
export default function useBaseModel() {
    //表单验证规则
    const rules = reactive({})
    return {
        rules
    }
}