import http from '@/http/http'

enum Api {
    getMenuList = '/api/sysUser/getMenuList',
    getTable = '/api/menu/list',
    getParent = '/api/menu/parent'
}
export const getMenuListApi = async () => {
    return await http.get(Api.getMenuList)
}

export const getTable = async () => {
    return await http.get(Api.getTable)
}

export const getParentApi = async()=>{
    return await http.get(Api.getParent)
}