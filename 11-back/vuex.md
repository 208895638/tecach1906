### 配置vuex

+ 基本配置 
```html

<script>
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

const store = new Vuex.store({

})

export default store
</script>
```

+ vuex 四个核心属性 

  - state 数据仓库 没有模块化的写法 获取state里面的值 通过`this.$store.state+获取的值` 

  - mutations 相当于methods 对state里面数据的更改都在这个mutations里面 `this.$store.commit("函数名称")`

  - action 执行异步操作的地方 ajax ` this.$store.dispatch("函数名称")`

  - getters  相当于计算属性 `this.$store.getters+获取的值 `

  - module 模块 

+ vuex模块化 

    - 在store文件下新建modules文件夹 modules 文件夹存放的是不同的js模块 

    - 修改store/index.js配置文件 

    - state 数据仓库 没有模块化的写法 获取state里面的值 通过函数的方式进行获取  this.$store.state+模块名称 + 需要的属性 `this.$store.state.car.num`

    - mutations 相当于methods 对state里面数据的更改都在这个mutations里面 `this.$store.commit("模块名称/函数名称")`

    - action 执行异步操作的地方 ajax ` this.$store.dispatch("模块名称/函数名称")`

    - getters  相当于计算属性 this.$store.getters["模块名称/函数名称"] `this.$store.getters["car/nums"]`

```html
<script>
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import user from "./modules/user"

const store = new Vuex.Store({
    modules: {
        userModule: user
    }
})

export default store
</script>
```
   - 各个模块的配置 

```html
<script>
const user = {
    state: {
        
    },
    namespaced: true,
    mutations: {
        
    },
    actions: {
        
    },
    getters: {
        
    }
}
export default user
</script>
``` 

### 模块化之后 获取state  mutations  action getter

+ 获取state里面的属性  `this.$store.state.userModule.username`



### vuex 辅助函数  
 封装的语法糖  可以简化代码  

+ mapState  用于获取sate里面的属性 
  - 模块化之后用mapState获取属性  需要在获取属性的前面加上模块名称
```html
<script>
    ...mapState({
        usernames:function(state){
            return state.userModule.username 
        }
    })
</script>
``` 
   - 没有用模块化 获取state里面的属性
    1. 字符串   
```html
<script>
    ...mapState({
        usernames:function(state){
            return state.username 
        }
    })
</script>
``` 
    2. 函数 (普通函数 丶 箭头函数 )

```html
<script>
    ...mapState({
        usernames:function(state){
            return state.username 
        }
    })
</script>
``` 
+ mapMutations

+ mapActions

+ mapGetters



### vuex缺点  

刷新页面之后数据消失

### 解决vuex刷新页面数据消失 与本地存储结合 

+ 在登陆的时候存储数据到本地 `localStorage.setItem("user",JSON.parse(this.username))`

+ 在vuex state里面设置数据获取方式 从本地进行获取

```html
<script>

const user = {
    state: {
        username: localStorage.getItem("user") // 实现了数据的长久保存
    },

    namespaced: true,

    mutations: {
        // 
        addUserName(state,val){ // 修改state里面的属性
            state.username = val;
        }
    },
    actions: {
        
    },
    getters: {
        
    }
}
export default user
</script>
``` 