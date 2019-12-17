import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/home/index"
import about from "@/views/about/index"
import abouts from "@/views/abouts/index"
import info from "@/views/info/index"
// 注册router插件
Vue.use(Router) 
export default new Router({  
    // vue-router默认使用的是hash路由
    mode:"history",
    linkActiveClass:"active",  // 默认渲染的是router-link-active 加上linkActiveClass 属性之后自定义class名称active
    routes: [  // 路由的配置
        {
           path:"/home" , // 定义单页面应用的访问的url地址 访问地址的时候 localhost:8080/home
           component:home,
           children:[ 
              { 
                  path:"info", // info 是home的子页面 访问的时候 访问的地址 /home/info
                  component:info
              }
           ]
        },
        {
            path:"/about" , // 定义单页面应用的访问的url地址 访问地址的时候 localhost:8080/home
            component:about
        },
        {
            //动态路由 id就是访问这个页面的时候传递的参数
            path:"/abouts/:id" , 
            name:"abouts", // :to="{ name='abouts' , params:{id : 10} }"
            component:abouts
        },
        // {
        //     // home/info 商品的详情页
        //     path:"/home/info",
        //     component:info
        // }
    ]
})