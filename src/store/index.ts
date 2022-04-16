import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export default store 

// export  { store }


// const showMsg = ()=>{
//     alert('showMsg')
// }

// export { showMsg }

// const PI = 3.1415
// export { PI }

// export const K = "kk"