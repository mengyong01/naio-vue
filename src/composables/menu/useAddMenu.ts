import { DialogModel } from "@/utils/baseType"
import { EditType, Title } from '@/utils/baseEnum'
import { ref, reactive } from 'vue'
import { ElForm } from 'element-plus'
import { AddMenuModel } from '@/api/menu/menuModel'
import useInstance from '@/hooks/useInstance'

export default function useAddMenu(dialog: DialogModel, onShow, onClose) {
    const { global } = useInstance()
    const addMenuForm = ref<InstanceType<typeof ElForm>>()
    const addModel = reactive<AddMenuModel>({
        id: '',
        editType: '', //新增、编辑
        type: '', //菜单类型 ： 0 目录 1 菜单  2 按钮
        parentId: '',
        parentName: '',
        label: '',
        icon: '',
        name: '',
        path: '',
        url: '',
        code: '',
        orderNum: 0,
    })

    const rules = reactive({
        type: [
            {
                required: true,
                trigger: "change",
                message: "请选择菜单类型",
            },
        ],
        parentName: [
            {
                required: true,
                trigger: "change",
                message: "请选择上级菜单",
            },
        ],
        label: [
            {
                required: true,
                trigger: "change",
                message: "请填写菜单名称",
            },
        ],
        name: [
            {
                required: true,
                trigger: "change",
                message: "请填写路由名称",
            },
        ],
        path: [
            {
                required: true,
                trigger: "change",
                message: "请填写路由路径",
            },
        ],
        url: [
            {
                required: true,
                trigger: "change",
                message: "请填写组件路径",
            },
        ],
        code: [
            {
                required: true,
                trigger: "change",
                message: "请填写权限字段",
            },
        ]
    })

    const confirm = () => {
        //关闭弹框
        onClose()
    }

    //显示弹框
    const show = (type: string, row: AddMenuModel) => {
        //设置弹框标题
        type == EditType.ADD ? dialog.title = Title.ADD : dialog.title = Title.EDIT
        //显示弹框
        onShow()
        global.$resetForm(addMenuForm.value, addModel)
        //如果是编辑，要把编辑的数据复制到表单绑定的model里面
        if (type == EditType.EDIT) {
            global.$objCopy(row, addModel)
        }
        addModel.type = type
    }

    return {
        confirm, show, addMenuForm, addModel, rules
    }
}