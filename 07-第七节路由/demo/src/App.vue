<template>
  <div id="app">
    <!-- vue-router提供的组件 主要的作用 用于页面间的跳转 -->
  <!-- to 访问对的页面的路由和router.js里面定义的路径是一样的 -->
    <!-- tag属性控制 router-link 在页面中将要被渲染的标签-->
    <!-- <router-link to="/home" tag="h2">home页面</router-link>    -->
    <!-- <router-link to="/home">home页面</router-link>   | -->
    <!-- query直接在访问的地址后面加上需要的参数 -->
    <!-- <router-link to="/about?id='10'">about页面</router-link> -->
    <!-- /about?id=20&age=30 -->
    <!-- <router-link :to="{path:'/about',query:{id:20,age:30 }}">about页面</router-link> -->
    <!-- router-view vue-router内置的组件 作用承载路由对应的组件 路由对应的组件都会被渲染到router-view这个容器里面  -->

    <!-- 动态路由如果没有传递参数的话 默认进入不了这个页面 -->
    <!-- 动态路由缓存 解决方法 监听路由的变化 -->
    <!-- <router-link to="/abouts/1">动态路由</router-link>
    <router-link to="/abouts/2">动态路由</router-link>| -->
    <!-- 下面这种写法存在 params 传递不了 -->
    <!-- <router-link :to="{path:'/abouts',params:{ id:20 }}">about页面动态路由传值页面</router-link> -->
    <!-- 命名视图传递动态路由参数 -->
    <!-- <router-link :to="{name:'abouts',params:{ id:30 }}"> 命名视图传递参数</router-link> -->
    <!-- 不用router-link 进行页面间的跳转 -->
    <div @click="toHome"> 
      跳转到home
    </div>
    <div @click="toAbout">
      跳转到abouts
    </div>
    <div @click="toInfo">
      跳转到商品详情页
    </div>
    <button @click="goback">
      后退一步
    </button>
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    toHome(){
      // $router 所有的路由对象
      // 跳转通过this.$router进行跳转 $route当前的路由对象
      // 跳转通过push方法进行跳转
      this.$router.push({ path:"/home" });
    },
    toInfo(){
      // query传值的跳转方式
      this.$router.push({ path:"/home/info" , query:{id:3}});
    },
    toAbout(){
      // 
      // this.$router.push({ path:"/abouts" , params:{id:3}});
      // this.$router.push({name:"abouts", params:{id:3}})
      this.$router.push({path:"/abouts/2" });
      // 原生js的前进后退 window.history.go(2)
      // vue中前进后退 this.$router.go()
    },
    goback(){
      //vue中前进后退 this.$router.go()
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
// router-link-active特点 当路由与router-link 里面to属性相同时  router-link 组件将会被加上router-link-active class名称
// 可以自定义router-link-active  这个class名称 在路由配置文件 routes 的同级 加一个linkActiveClass属性
.router-link-active{
  color:red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
