import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './../components/Home.vue'
import welcome from './../components/welcome.vue'
import Login from './../components/Login.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        meta:{
            title:'首页'
        },
        component:Home,
        redirect:'/welcome', //重定向
        children:[
            {
                name:'welcome',
                path:'/welcome',
                meta:{
                    title:'欢迎页'
                },
                component: welcome,
            },
            {
                name:'login',
                path:'/Login',
                meta:{
                    title:'登录'  
                },
                component: Login,
            }
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes 
})

export default router //导航守卫  权限 