import router from './router'
import { useUserStore } from './store/user'
import { useMenuStore } from './store/menu'
import { getToken, cleanSession} from './utils/auth'

const whiteList = ['/login'];
const userStore = useUserStore()
const menuStore = useMenuStore()
router.beforeEach(async (to, from, next) => {
    let token = getToken();
    if (token) { //token存在
        if (to.path === "/login" || to.path === "/") {
            next({ path: '/' })
        } else {
            console.log(userStore.$state)
            let hasRoles = userStore.$state.permissions && userStore.$state.permissions.length > 0;
            if (hasRoles) {
                next();
            } else {
                try {
                    // debugger
                    await userStore.getInfo()
                    // debugger
                    await menuStore.getMenuListActions(router)
                    
                    //确保动态添加的路由已经被完全加载上去
                    next({ ...to, replace: true })
                } catch (error) {
                    //重置token
                    cleanSession();
                    //跳到登录
                    next({ path: '/login' })
                }

            }
        }
    } else { //token不存在 , 跳转的时候，需要注意 BredCum.vue里面判断first
        //判断是否存在白名单中
        if (whiteList.indexOf(to.path) !== -1) { //存在白名单中
            next();
        } else { //不存在白名单中,去登录
            next({ path: '/login' })
        }
    }
})