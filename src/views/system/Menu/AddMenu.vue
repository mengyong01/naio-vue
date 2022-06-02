<template>
    <SysDialog :title="dialog.title" :width="dialog.width" :height="dialog.height" :visible="dialog.visible"
        @onConfirm="confirm" @onClose="onClose">
        <template #content>
            <el-form :model="addModel" ref="addMenuForm" :rules="rules" label-width="80px" :inline="false"
                size="normal">
                <el-row>
                    <el-col :span="24" :offset="0">
                        <el-form-item prop="type" label="菜单类型">
                            <el-radio-group v-model="addModel.type">
                                <el-radio :label="'0'">目录</el-radio>
                                <el-radio :label="'1'">菜单</el-radio>
                                <el-radio :label="'2'">按钮</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="parentName" label="上级菜单">
                            <el-input type="hidden" v-model="addModel.parentId"></el-input>
                            <el-input @click="selectParent" readonly v-model="addModel.parentName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="label" label="菜单名称">
                            <el-input v-model="addModel.label"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="icon" label="菜单图标">
                            <el-input v-model="addModel.icon"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="name" label="路由名称">
                            <el-input v-model="addModel.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="path" label="路由地址">
                            <el-input v-model="addModel.path"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="url" label="组件路径">
                            <el-input v-model="addModel.url"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="code" label="权限字段">
                            <el-input v-model="addModel.code"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="orderNum" label="菜单序号">
                            <el-input v-model="addModel.orderNum"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </template>
    </SysDialog>
    <!-- 上级弹框 -->
    <MenuParent ref="parentRef" @select="select"></MenuParent>
</template>
<script setup lang='ts'>
import SysDialog from '@/components/SysDialog/index.vue'
import useDialog from '@/hooks/useDialog'
import useAddMenu from '@/composables/menu/useAddMenu'
import MenuParent from './MenuParent.vue'
import useSelectParent from '@/composables/menu/useSelectParent'
//弹框属性
const { dialog, onShow, onClose } = useDialog()

//注册事件
const emit = defineEmits(['save'])
const { confirm, show, addMenuForm, addModel, rules, select } = useAddMenu(dialog, onShow, onClose, emit)

//暴露方法
defineExpose({
    show
})

//上级部门
const { parentRef, selectParent } = useSelectParent()


</script>
