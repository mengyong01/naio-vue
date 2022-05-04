<template>
    <SysDialog :title="dialog.title" :visible="dialog.visible" :height="dialog.height" :width="dialog.width"
        @onClose='onClose' @onConfirm='confirm'>
        <template v-slot:content>
            弹框内容
        </template>
    </SysDialog>
</template>
<script setup lang='ts'>
import SysDialog from '@/components/SysDialog/index.vue'
import useDialog from '../../../hooks/useDialog'
import { EditType, Title } from '../../../utils/BaseEnum'
import useBaseModel from '../../../composables/department/useBaseModel'

//基础数据
const { dialogModel } = useBaseModel()

//弹框
const { dialog, onClose, onShow } = useDialog()

//注册事件
const emit = defineEmits(['save'])
//弹框确定返回表单值给父组件
const confirm = () => {
    //返回值
    emit('save', dialogModel)
    //关闭弹框
    onClose()
}

//父组件调用子组件展示弹框
const show = (type: string) => {
    //显示弹框
    onShow()
    //设置弹框的标题
    type == EditType.ADD ? dialog.title = Title.ADD : dialog.title = Title.EDIT
    //设置type
    dialogModel.type = type
}

defineExpose({
    show
})
</script>