import http from '../../http/http'
import { ListParam } from './deptModel'

enum Api {
    getDeptList = '/api/department/list',
    getParent = '/api/department/parent'
}

//部门列表
export const getDeptListApi = async (parms: ListParam) => {
    return await http.get(Api.getDeptList, parms)
}

//查询上级部门的树
export const getDeptParentApi = async () => {
    return await http.get(Api.getParent)
}
