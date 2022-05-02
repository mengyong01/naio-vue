//搜索关键字
export interface ListParam {
    searchName: string
}
//表格数据
export interface DeptModel {
    id: number;
    pid: number;
    likeId: number;
    parentName: string;
    manager: string;
    name: string;
    deptCode: string;
    deptAddress: string;
    deptPhone: string;
    orderNum: number;
    open: boolean;
    children: any
}
//新增、编辑 表单提交的数据类型
export interface AddDeptModel {
    type: string;
    id: string | number;
    pid: string | number;
    parentName: string;
    manager: string;
    deptAddress: string;
    deptPhone: string;
    name: string;
    deptCode: string;
    orderNum: string;
}