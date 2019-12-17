import Vue from "vue";
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
    mode:"history", // 需要后端配置一下
    scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve({ x: 0, y: 0 })
            })
        })
    },
    routes:[
        {
            path:"/",
            redirect : "/login"
        },
        {
            path:"/login",
            component: () => import( '@/views/login/index.vue'),
            meta:{
                isFootShow:false
            }
        },
        {
            path:"/home",
            component: () => import( '@/views/home/index.vue'),
            meta:{
                isFootShow:true
            }
        },
        {
            path:"/info/:ids", // this.$route.params.ids
            component: () => import( '@/views/info/index.vue'),
            meta:{
                isFootShow:true
            }
        },
        {
            path:"/car",
            component: () => import( '@/views/car/index.vue'),
            meta:{
                isFootShow:true
            }
        }
    ],

})

export default router