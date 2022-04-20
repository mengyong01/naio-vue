import http from '../../http/http'
import { ListParam } from './DeptModel'

enum Api {
    getDeptList = '/api/department/list'
}

//部门列表
export const getDeptListApi = async (parms: ListParam) => {
    return await http.get(Api.getDeptList, parms)
}