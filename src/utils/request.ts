import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/173d1aaad5f7b1d2b4ac739cdfd40877/ele',
    timeout: 500000
})

service.interceptors.request.use((config) => {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem('token')
    return config
}, (error) => {
    return Promise.reject(new Error(error))
})

service.interceptors.response.use((response) => {
    const { data } = response
    //data::
    // code: 200
    // data: {token: 'cf8e6937-d72f-4b0f-9c41-c95fabfa84ad'}
    // message: "登录成功"
    // success: true
    if (data.code == 200) {
        // ElMessage({
        //     type: 'success',
        //     message: data.message,
        //     duration: 1000
        // })
        return data
    } else {
        ElMessage.error(data.message)
        return Promise.reject(new Error(data.message))
    }
}, err => {
    err.response && ElMessage.error(err.response.data)
    return Promise.reject(new Error(err.response.data))
})

export default service