import { LoginParm, LoginResult, UserInfo } from "./userModel"
import http from '../../http/http'

enum Api {
    getImg = '/api/sysUser/image',
    // login = '/api/auth/login',
    login = '/api/user/login',
    // getInfo = '/api/auth/info'
    getInfo = '/api/sysUser/getInfo'
}

//登录
export async function loginApi(params: LoginParm) {
    let temp = {
        mobile: params.username,
        password: params.password
    }
    return await http.login<LoginResult>(Api.login, params)
}

//获取验证码
export async function getImageApi() {
    return await http.getImage(Api.getImg)
}

//获取用户信息
export const getInfoApi = async () => {
    return await http.get<UserInfo>(Api.getInfo)
}
