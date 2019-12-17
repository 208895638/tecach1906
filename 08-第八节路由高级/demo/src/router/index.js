import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    // 通过scrollBehavior 控制滚动条的位置
    // 没有加通过scrollBehavior 默认页面切换的时候滚动条所处的位置是不变的
    // scrollBehavior 加上去之后 可以控制滚动条置顶
    scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve({ x: 0, y: 0 })
            })
        })
        },
    routes:[
        {
            path:"/home",
            component:() => import( '@/views/home/index.vue'),
            meta:{
                title:"不凡首页"
            }
        },
        {
            path:"/login",
            component:() => import( '@/views/login/index.vue'),
            meta:{
                title:"登陆"
            }
        },
        {
            path:"/spxq/:id",
            component:() => import( '@/views/spxq/index.vue'),
            meta:{
                title:"商品详情"
            }
        },
        {
            path:"/info",
            component:() => import( '@/views/home/index.vue'),
            meta:{
                title:"详情页",
                requireAuth:true
            }
            // beforeEnter 路由上的守卫 进入当前路由的时候才执行的守卫函数
            // 路由守卫与全局守卫区别
            // 全局守卫 每次路由跳转的时候都会执行的守卫函数
            // 路由守卫 只有进入到当前路由的时候才会执行的守卫函数
            // 一个是全局的  一个是局部的
            // beforeEnter: (to, from, next) => {
            //     if(localStorage.getItem("key")){
            //         next();
            //     }else{
            //         alert("暂未登陆!");
            //         next("/login")
            //     }
            // }
        },
    ]
})