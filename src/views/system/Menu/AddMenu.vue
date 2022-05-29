<template>
    <SysDialog :title="dialog.title" :width="dialog.width" :height="dialog.height" :visible="dialog.visible"
        @onConfirm="confirm" @onClose="onClose">
        <template #content>
            <el-form :model="addModel" ref="addMenuForm" :rules="rules" label-width="80px" :inline="false"
                size="normal">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="name" label="角色名称">
                            <el-input v-model="addModel.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :offset="0">
                        <el-form-item label="角色备注">
                            <el-input v-model="addModel.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </template>
    </SysDialog>
</template>
<script setup lang='ts'>
import SysDialog from '@/components/SysDialog/index.vue'
import useDialog from '@/hooks/useDialog'
import useAddMenu from '@/composables/menu/useAddMenu'

//弹框属性
const { dialog, onShow, onClose } = useDialog()
const { confirm, show, addMenuForm, addModel, rules } = useAddMenu(dialog, onShow, onClose)

//暴露方法
defineExpose({
    show
})
</script>
<style scoped lang='less'>



:deep(:root){
   --swiper-theme-color: #999999 !important; 
}

</style>