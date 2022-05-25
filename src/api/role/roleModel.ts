/**
 * 角色列表查询参数
 */
export interface RoleListParam {
    userId: string | number;
    currentPage: number;
    pageSize: number;
    name: string;
    total: number;
}

/**
 * 角色类型定义
 */
export interface AddRoleModel {
    id: number | string;
    name: string;
    remark: string;
    createUser: string | number;
    type: string; //新增、编辑
}

export interface DeleteParam {
    id: number | string;
}