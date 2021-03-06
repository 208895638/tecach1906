# vue
## seo
汉译为搜索引擎优化。是一种方式：利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益。

### nuxt服务端渲染与客户端渲染

传统的web开发，传统的web开发是，客户端向服务端发送请求，服务端查询数据库，拼接`HTML`字符串（模板），通过一系列的数据处理之后，把整理好的`HTML`返回给客户端,浏览器相当于打开了一个页面。这种比如我们经常听说过的`jsp`,`PHP`,`aspx`也就是传统的`MVC`的开发。

`SPA`应用，到了`Vue`、`React`，单页面应用优秀的用户体验，逐渐成为了主流，页面整体式`javaScript`渲染出来的，称之为客户端渲染`CSR`。`SPA`渲染过程。由客户端访问`URL`发送请求到服务端，返回`HTML`结构（但是`SPA`的返回的`HTML`结构是非常的小的，只有一个基本的结构，如第一段代码所示）。客户端接收到返回结果之后，在客户端开始渲染`HTML`，渲染时执行对应`javaScript`，最后渲染`template`，渲染完成之后，再次向服务端发送数据请求，注意这里时数据请求，服务端返回`json`格式数据。客户端接收数据，然后完成最终渲染。

`SPA`虽然给服务器减轻了压力，但是也是有缺点的：

1. 首屏渲染时间比较长：必须等待`JavaScript`加载完毕，并且执行完毕，才能渲染出首屏。
2. `SEO`不友好：爬虫只能拿到一个`div`元素，认为页面是空的，不利于`SEO`。

为了解决如上两个问题，出现了`SSR`解决方案，后端渲染出首屏的`DOM`结构返回，前端拿到内容带上首屏，后续的页面操作，再用单页面路由和渲染，称之为服务端渲染(`SSR`)。

SSR`渲染流程是这样的，客户端发送`URL`请求到服务端，服务端读取对应的`url`的模板信息，在服务端做出`html`和`数据`的渲染，渲染完成之后返回`html`结构，客户端这时拿到的之后首屏页面的`html`结构。所以用户在浏览首屏的时候速度会很快，因为客户端不需要再次发送`ajax`请求。并不是做了`SSR`我们的页面就不属于`SPA`应用了，它仍然是一个独立的`spa`应用。

`SSR`在渲染首屏的时候在服务端做出了渲染，注意仅仅是首屏，其他页面还是需要在客户端渲染的，在`服务端`接收到请求之后并且渲染出首屏页面，会携带着剩余的路由信息预留给`客户端`去渲染其他路由的页面。

### Nuxt.js是特点（优点）
+ 基于 Vue.js
+ 自动代码分层
+ 服务端渲染
+ 强大的路由功能，支持异步数据
+ 静态文件服务
+ ES6/ES7 语法支持
+ 打包和压缩 JS 和 CSS
+ HTML头部标签管理
+ 本地开发支持热加载
+ 集成ESLint
+ 支持各种样式预处理器： SASS、LESS、 Stylus等等

### Nuxt环境搭建
使用nuxt的前提必须已经安装了vue的脚手架,nuxt的项目通过脚手架来进行创建
`npm install vue-cli -g`
1. [初始化nuxt的项目](https://zh.nuxtjs.org/guide/installation "初始化nuxt的项目")
`npx create-nuxt-app <项目名>`
2. 启动服务  
`npm run dev`
3. 查看项目  
在浏览器输入 localhost:3000,可以看到结果

### Nuxt目录结构详讲
Nuxt自动生产了项目目录  
```html
<script>
|-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
|-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
|-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
|-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
|-- middleware                       // 用于存放中间件 一般用于鉴权
|-- pages                            // 用于存放写的页面，我们主要的工作区域
|-- plugins                          // 用于存放JavaScript插件的地方
|-- static                           // 用于存放静态资源文件，比如图片
|-- store                            // 用于组织应用的Vuex 状态管理。
|-- .editorconfig                    // 开发工具格式配置
|-- .eslintrc.js                     // ESLint的配置文件，用于检查代码格式
|-- .gitignore                       // 配置git不上传的文件
|-- nuxt.config.json                 // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package.json                     // npm包管理配置文件
</script>
```
### nuxt生命周期

![nuxt生命周期](https://img-blog.csdnimg.cn/20190702173158457.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlYmpoaA==,size_16,color_FFFFFF,t_70)

### 修改启动端口  

找到package.json   
在package.json里面加上
<script>
"config":{
  "nuxt":{
    "host":"127.0.0.1",
    "port":"1234"
  }
} // 项目就运行在localhost:1234 当然不修改也行  项目会运行在localhost:3000
</script>
### nuxt 配置sass
 `cnpm install --save-dev  node-sass sass-loader`  
 安装这两个插件之后就可以在项目里面使用scss

### Nuxt常用配置项 
+ 配置全局CSS  
在开发多页项目时，都会定义一个全局的CSS来初始化我们的页面渲染，比如重置样式.
  - 在assets文件夹新建css文件夹 在新建reset.css  
```html
<script>
//    /assets/css/reset.css
// 重置样式随意网上搜下就行
html{
    color:red;
}

// /nuxt.config.js
css:['~assets/css/reset.css'],
</script>
```
配置完成后就可以看到文字颜色变成红色
+ 配置全局插件  
常用插件如swiper:  
```html
<script>
  //1. 安装swiper
  `cnpm install vue-awesome-swiper --save`
  //2. /plugins/swiper.js  
  //在plugins文件夹下新建swiper.js 并填入以下内容
  import Vue from "vue";
  if (process.browser) {
      const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
      Vue.use(VueAwesomeSwiper)
  }
  //3. 在nuxt.config.js里面引入swiper  
  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // ssr: Boolean (默认为 true) 如果值为 false，该文件只会在客户端被打包引入。
    { src: '~/plugins/swiper.js', ssr: false },
  ],
  // 4. 服务端渲染的代码和spa的代码不一样
  参考 https://github.com/surmon-china/vue-awesome-swiper#ssr
  // 5. 愉快的开始swiper的开发
</script>
```

### Nuxt的路由配置和参数传递 

前端框架都要学习路由机制，因为路由可以体现我们的业务逻辑，把模块串联起来，让程序焕发光彩。那简单的说路由就是我们的跳转机制，也可以简单理解成链接跳转。Nuxt.js的路由并不复杂，它给我们进行了封装，让我们节省了很多配置环节。注意:`在nuxt中没有vue-router配置文件`
+ 在根目录的pages文件下新建两个文件夹，about和news 在about文件夹下新建index.vue文件，并写入下面的代码：  
```html
  <template>
    <div>
        <h2>About Index page</h2>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
    </div>
  </template>
```
在news文件夹下新建index.vue文件，并写入下面的代码：  

```html
  <template>
    <div>
        <h2>News Index page</h2>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
    </div>
  </template>
```
修改原来的pages文件夹下的index.vue，删除没用的代码，写入下面链接代码：  
```html
<template>
  <div>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/about">ABOUT</a></li>
      <li><a href="/news">NEWS</a></li>
    </ul>
  </div>
</template>
 
<script>
 
export default {
  components: {
   
  }
}
</script>
 
<style>
 
</style>
```
### 跳转标签<nuxt-link> 
使用nuxt提供的组件进行页面间的跳转 
```html
<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news'}">NEWS</nuxt-link></li>
    </ul>
  </div>
</template>
 
<script>
 
export default {
  components: {
   
  }
}
</script>
 
<style>
 
</style>
```

### 传递参数 
+ query传值  
  直接在地址栏后面拼接需要传递的参数
  `<nuxt-link to="/info?id=10">商品列表页</nuxt-link>`
```html
<template>
    <div>
<template>
    <div>
        商品列表页
        <button @click="toInfo">点击跳转到详情页</button>
        <nuxt-link to="/info?id=10">商品列表页</nuxt-link>
        <nuxt-link :to="{path:'/info',query:{id:20}}">商品列表页1</nuxt-link>
    </div>
</template>

<script>
export default {
    
    methods: {
        toInfo(){
            this.$router.push({path:"/info",query:{id:30}})
        }
    },
};
</script>

```
+ 动态路由传值 
因为在nuxt中没有路由配置文件,在nuxt中路由配置文件由nuxt自动生成，所以创建按关于nuxt的动态路由需要特殊的创建,在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录。
```html
<script>
// 项目结构
pages/ 
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue //users/：id 
--| index.vue
// 将会被渲染城的路由文件  

router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
// 获取通过this.$route.params+传值
</script>
```


### 嵌套路由
创建内嵌子路由，你需要添加一个 Vue 文件，同时添加一个与该文件同名的目录用来存放子视图组件。  
在父组件里面添加`<nuxt-child/>`存放子页面
```html
<script>
//  目录结构
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
// 最终渲染路由结构
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
</script>
```
### 登陆鉴权

登陆鉴权通过nuxt的中间件来实现

在上面一张图可以看到，middleware是在页面渲染执行，也就是在页面渲染到浏览器之前进行的操作，一般通过 nuxt执行路由鉴权的操作.[nuxt服务端与客户端获取cookie](https://blog.csdn.net/umufeng/article/details/80524766)

### Nuxt的路由动画效果 
路由的动画效果，也叫作页面的更换效果。Nuxt.js提供两种方法为路由提供动画效果，一种是全局的，一种是针对单独页面制作。

+ 全局路由动画  
全局动画默认使用page来进行设置，例如现在我们为每个页面都设置一个进入和退出时的渐隐渐现的效果。我们可以先在根目录的assets/css下建立一个main.css文件。  
/assets/css/main.css(没有请自行建立)
```html
.page-enter-active, .page-leave-active {
    transition: opacity 2s;
}
.page-enter, .page-leave-active {
    opacity: 0;
}
```
然后在nuxt.config.js里加入一个全局的css文件就可以了。   
```html
css:['assets/css/main.css'],
```
这时候在页面切换的时候就会有2秒钟的动画切换效果了  
+ 单独设置页面动效
想给一个页面单独设置特殊的效果时，我们只要在css里改变默认的page，然后在页面组件的配置中加入transition字段即可。例如，我们想给about页面加入一个字体放大然后缩小的效果，其他页面没有这个效果。  
在全局样式assets/main.css 中添加以下内容。
```html
.test-enter-active, .test-leave-active {
    transition: all 2s;
    font-size:12px;
    
}
.test-enter, .test-leave-active {
    opacity: 0;
    font-size:40px;
}
```
然后在about/index.vue组件中设置  
```html
export default {
  transition:'test'
}
```
这时候就有了页面的切换独特动效了。

### Nuxt的错误页面和个性meta设置 
当用户输入路由错误的时候，我们需要给他一个明确的指引，所以说在应用程序开发中404页面是必不可少的。Nuxt.js支持直接在默认布局文件夹里建立错误页面。  
在根目录下的layouts文件夹下建立一个error.vue文件，它相当于一个显示应用错误的组件。  
```html
<template>
  <div>
      <h2 v-if="error.statusCode==404">404页面不存在</h2>
      <h2 v-else>500服务器错误</h2>
      <ul>
          <li><nuxt-link to="/">HOME</nuxt-link></li>
      </ul>
  </div>
</template>
 
<script>
export default {
  props:['error'],
}
</script>
```
代码用v-if进行判断错误类型，需要注意的是这个错误是你需要在`<script>`里进行声明的，如果不声明程序是找不到`error.statusCode`的。  
### 个性meta设置
页面的Meta对于SEO的设置非常重要，比如你现在要作个新闻页面，那为了搜索引擎对新闻的收录，需要每个页面对新闻都有不同的title和meta设置。直接使用head方法来设置当前页面的头部信息就可以了。
```html
<template>
  <div>
      <h2>News-Content [{{$route.params.id}}]</h2>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      title:this.$route.params.title,
    }
  },
//独立设置head信息
  head(){
      return{
        title:this.title,
        meta:[
          {hid:'description',name:'news',content:'This is news page'}
        ]
      }
    }
}
  
</script>
```
注意：为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为meta标签配一个唯一的标识编号。
### asyncData方法获取数据 
asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据，Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件。  
***注意：由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。***
+ 使用Axios 
Vue.js官方推荐使用的远程数据获取方式就Axios，且nuxt默认集成了axios，可以在项目的任何地方使用；  
[nuxtaxios文档](https://axios.nuxtjs.org/setup)

+ 使用Axios 分为SSR渲染和非SSR渲染
  - ssr渲染   
  也就是要在渲染页面之前把数据返回 也就是说浏览器请求页面的时候数据已经渲染到页面上了 ssr渲染需要用到nuxt提供的生命周期钩子函数`asyncData`  
  ![ssr渲染](https://img-blog.csdnimg.cn/20191128150619206.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1RvbXdpbGRib2Fy,size_16,color_FFFFFF,t_70  "ssr渲染")
  - 非ssr渲染  
  ![非ssr渲染](https://img-blog.csdnimg.cn/20191128150605392.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1RvbXdpbGRib2Fy,size_16,color_FFFFFF,t_70 "非ssr渲染")  

具体配置参考[在nuxt中使用axios](https://blog.csdn.net/Tomwildboar/article/details/95928616)

### 打包及预览

+ 静态服务部署
Nuxt.js 可依据路由配置将应用静态化，使得我们可以将应用部署至任何一个静态站点主机服务商。
`服务端渲染应用部署`:是每次请求经过服务器，查询数据库或接口，渲染模板后返回html，算是动态渲染的；
`静态部署`: 是预先将所有路由页面处理后，生成静态的html，是一个完全不需要服务器的静态网站了。
+ 服务端渲染
1. 对应用进行打包 执行`npm run build`命令
2. 复制项目目录里面的.nuxt文件夹、static文件夹、nuxt.config.js、package.json到服务器中  
3. 安装项目依赖 npm install 
4. 运行 npm run start 项目就运行成功

+ 静态部署  
静态部署直接执行一个命令 `npm run generate`
*注意*  
在 Nuxt.js 执行 generate 命令时，动态路由 会被忽略。 也就是说项目里面如果有动态路由 那么打包的时候就会忽略动态路由   
[解决静态部署动态路由问题](https://zh.nuxtjs.org/api/configuration-generate#routes)


### 作业 cnode
















