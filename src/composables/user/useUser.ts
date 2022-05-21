import { AddUserModel } from '@/api/user/userModel'
import { Result } from '@/http/request'
import { EditType } from '@/utils/baseEnum'
import { ref } from 'vue'
import { addUserApi, editUserApi, deleteUserApi } from '@/api/user/user'
import useInstance from '@/hooks/useInstance'

export default function useUser(getUserList: any) {
    //globale property
    const { global } = useInstance()

    const userAddRef = ref<{ show: (type: string, row?: AddUserModel) => void }>()

    const addBtn = () => {
        console.log('addBtn')
        userAddRef.value?.show(EditType.ADD)
    }
    const editBtn = (row: AddUserModel) => {
        console.log('editBtn', row)
        userAddRef.value?.show(EditType.EDIT, row)
    }
    const deleteBtn = async (id: number) => {
        console.log('deleteBtn', id)
        let param = {
            id: id
        }
        let confirm = await global.$myconfirm('确定删除该数据吗?')
        if (confirm) {
            let res = await deleteUserApi(param)
            if (res && res.code == 200) {
                global.$message({ message: res.msg, type: 'success' })
                getUserList()
            }
        }
    }
    const assignBtn = (param: any) => {
        console.log('assignBtn', param)
    }

    const save = async (param: AddUserModel) => {
        console.log('父组件接收的参数==>', param)
        let res: Result
        if (param.type == EditType.ADD) {
            res = await addUserApi(param)
        } else {
            res = await editUserApi(param)
        }
        if (res && res.code == 200) {
            //刷新列表
            getUserList()
            //信息提示
            global.$message({ message: res.msg, type: 'success' })
        }
    }

    return {
        addBtn,
        editBtn,
        deleteBtn,
        assignBtn,
        userAddRef,
        save
    }
}