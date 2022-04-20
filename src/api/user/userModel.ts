export interface LoginParm {
    username: string;
    password: string;
    code: string
}

export interface LoginResult2 {
    error_code: number;
    access_token: string;
    expires_in: number;
    token_type: string;
    msg: string
}

/**
 * 登录返回值
 */
export interface LoginResult {
    code: number;
    token: string;
    id: number;
    expireTime: number
}

export interface UserInfo {
    avatar: string;
    id: string;
    introduction: string;
    name: string;
    roles: Array<string>
}