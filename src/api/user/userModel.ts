export interface LoginParm {
    username: string;
    password: string
}

export interface LoginResult{
    error_code: number;
    access_token: string;
    expires_in: number;
    token_type: string;
    msg: string
}

// export interface LoginResult{
//     error_code: number;
//     data: any;
//     msg: string
// }