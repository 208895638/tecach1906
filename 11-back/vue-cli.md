### vue-cli创建项目

1. `vue create 项目名称`

2. 勾选需要的依赖 (依赖 项目运行所需要的插件) 
   + babel  es6 转es5  所有的浏览器都不支持import 和 export  在script标签里面 type="module"
   + router 
   + vuex 
   + CSS Pre-processors  减少css3兼容性的写法  

3. node-sass 脚手架基于node 

4. 把 第二步勾选的插件保存到package.json文件里面

5. cd 刚刚创建的项目

6. npm run serve 运行



### 注意事项 

+ 在main.js引入的组件 插件 或者其他  使用vue.use vue.component 代表注册的是全局的组件或者插件

+ 脚手架创建的项目没有页面之分 在src文件夹下新建views文件夹  这个文件夹存放的就项目全部的页面  
  
  -  我们吧views 下的文件夹默认看作一个页面 这是规范 

  -  这个文件下下的index.vue就代表这个页面

+ 只有vuex和vue-router 需要放到vue实例类里面

### 脚手架安装依赖  

+ vue-router

    - 安装路由插件 cnpm install vue-router --save   安装不代表可以使用 要使用首先的在项目里面引入一下

    - 在src目录下新建文件夹 router 

    - 在router文件夹下新建index.js index.js 就是路由的配置文件 暴露这个配置文件  export default

    - 配置路由文件完成之后 需要在main.js里面进行引入 `import router from "./router/index.js" `

    - 把router配置文件挂载到vue实例类上面 

+ vuex  

  - 安装插件  `cnpm install vuex --save`

  - 在src文件夹下面新建store文件 在store文件下面新建index.js 

  - 配置 vuex 
 
  - 在main.js里面引入 `import store from "./store"` 挂载到vue实例类上面  



    

