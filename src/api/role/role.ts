import http from '@/http/http'
import { AddRoleModel, DeleteParam, RoleListParam } from './RoleModel'

enum Api {
    getList = '/api/role/list',
    addRole = '/api/role',
    editRole = '/api/role',
    deleteRole = '/api/role',
}
//角色列表
export const getRoleListApi = async (param: RoleListParam) => {
    return await http.get(Api.getList, param)
}
//新增
export const addRoleApi = async (param: AddRoleModel) => {
    return await http.post(Api.addRole, param)
}
//编辑
export const editRoleApi = async (param: AddRoleModel) => {
    return await http.put(Api.editRole, param)
}
//删除
export const deleteRoleApi = async(param: DeleteParam)=>{
    return await http.delete(Api.deleteRole, param)
}