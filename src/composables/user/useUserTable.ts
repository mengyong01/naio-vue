import { reactive, onMounted } from 'vue'
import { UserListParm } from '@/api/user/userModel'
import { getUserListApi } from '@/api/user/user'

export default function useUserTable() {
    //列表参数
    const listParm = reactive<UserListParm>({
        deptId: '',
        currentPage: 1,
        pageSize: 10,
        loginName: '',
        total: 0
    })
    //表格数据
    const tableData = reactive({
        list: []
    })

    //获取表格数据
    const getUserList = async () => {
        let res = await getUserListApi(listParm)
        console.log(res)
        // debugger
        if (res && res.code == 200) {
            tableData.list = res.data.records
            listParm.total = res.data.total
        }
    }
    //树点击数据
    const treeClick = (deptId: number) => {
        console.log('父组件收到')
        //设置点击的部门id
        listParm.deptId = deptId
        //获取部门列表
        getUserList()
    }
    //页容量改变触发
    const sizeChange = (size: number) => {
        listParm.pageSize = size
        getUserList()
    }
    //页数改变触发
    const currentChange = (page: number) => {
        listParm.currentPage = page
        getUserList()
    }
    onMounted(() => {
        getUserList()
    })

    const searchBtn = ()=>{
        getUserList()
    }

    const resetBtn = ()=>{
        listParm.loginName = ''
        getUserList()
    }
    return {
        listParm,
        tableData,
        getUserList,
        treeClick,
        sizeChange,
        currentChange,
        searchBtn,
        resetBtn
    }
}