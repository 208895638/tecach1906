### vue-router的使用 

+ 引入vue-router  注册全局router Vue.use(Router)  vue.use就代表注册全局插件

```html
<script>
import Vue from "vue";
import Router from "vue-router"

Vue.use(Router)
</script>
```

+ 写router的配置 

    ```html
    <script>
    import Vue from "vue";
    import Router from "vue-router"

    Vue.use(Router)

    const router = new Router({

        routes:[ // 存放所有路由的地方 
            
        ]
    })
    </script>
    ```html

+ 每个路由配置是一个对象 
  - path 定义访问的路径
  - component  路由所对应的组件

+ 选择router需要渲染的区域 一般把这个区域放在 app.vue里面
  
  - router-view组件  路由将会被渲染的位置  

  - router-link 类似a标签 跳转连接用的 <router-link tag="div" :to="`/info/${ item.id }?id=''`" ></router-link>

+ 路由重定向  redirect  指定页面需要被重定向的路由  

+ js的方式跳转页面  

  - this.$router.push("需要跳转的路径") 进行跳转  this.$router.push("/home/1")(不存在缓存问题 传值也简单 )


+ 可以通过导航首位判断用户有没有权限进入某个页面
    
    ```html
    <script>
        router.beforeEach((to, from, next) => {
            if(to.path != "/login"){
            if(localStorage.getItem("user")){
                next()
            }else{
                next("/login")
            }
            }else{
            next()
            }
        })
    </script>
    ```html


+ 动态路由传值 

    ```html
    <script>
    {
        //  传递参数的时候 通过 to="/info/1"
        path:"/info/:ids", // this.$route.params.ids
        component: () => import( '@/views/info/index.vue'),
        meta:{
            isFootShow:true
        }
    }
    </script>
    ```html

+ $route 当前的路由对象 $router 所有的路由对象 可以想象成路由配置文件 
js跳转页面的时候通过 $router

+ 路由懒加载 对页面优化有很大的好长 
最主要的作用 当匹配奥路由的时候再路由对应的组件 
脚手架打包项目的时候默认会把所有的路由对应的组件打包进router-view里面(app.vue)
路由懒加载 吧路由对应的组件打包成一个个js文件  在需要的时候再引入打包生成的js文件 
`component: () => import( '@/views/info/index.vue')`

+ mode属性 跟routes同级 mode属性有两个值 `hash` `history`  `history`  需要后端配置一下  ["history配置"](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90 "history配置")

+ linkActiveClass 自定义class名称

+ `path: '/'`, // 代表进入项目的时候默认展示的页面 如果不写的话 进入项目显示的是空白


+ 导航守卫  全局守卫(掌握)  路由守卫(局部守卫)  组件守卫

在main.js写的router.beforeEach()

    ```html
    <script>
router.beforeEach((to, from, next) => {
    if(to.path != "/login"){
      if(localStorage.getItem("user")){
        next()
      }else{
        next("/login")
      }
    }else{
      next()
    }
})

</script>
```html


