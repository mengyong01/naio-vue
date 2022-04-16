import request from '../utils/request'

export const login = (data: any)=>{
    return request({
        url: '/sys/login',
        method: 'POST',
        data
    })
}