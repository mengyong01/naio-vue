import { getDeptListApi } from '../../api/dept/dept'
import { ListParam } from '../../api/dept/deptModel'
import { reactive, onMounted } from 'vue'

export default function useDeptTable(){
    //定义搜索数据
    const searchForm = reactive<ListParam>({
        searchName:''
    })
    //定义表格数据
    const tableData = reactive({
        list:[]
    })
    //获取表格数据
    const getDeptList = async() =>{
        const res = await getDeptListApi(searchForm);
        if(res && res.code == 200){
            tableData.list = res.data;
        }
    }
    //首次加载数据
    onMounted(() =>{
        getDeptList()
    })
    return{
        searchForm,
        tableData,
        getDeptList
    }
}