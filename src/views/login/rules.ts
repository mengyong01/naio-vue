export const validatePassword = () => {
    return (rule:string, value:string, callback:(arg?: any)=>{}) => {
        if (value.length < 6) {
            callback(new Error('密码要大于等于6位'))
        } else {
            callback()
        }
    }
}