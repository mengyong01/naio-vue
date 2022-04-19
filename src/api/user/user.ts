import { LoginParm, LoginResult } from "./userModel"
import http from '../../http/http'

enum Api {
    getImg = '/api/sysUser/image',
    login = '/api/auth/login'
}

//登录
export async function loginApi(params: LoginParm) {
    let temp = {
        mobile: params.username,
        password: params.password
    }
    return await http.login<LoginResult>(Api.login, temp)
}

//获取验证码
export async function getImageApi() {
    return await http.getImage(Api.getImg)
}
