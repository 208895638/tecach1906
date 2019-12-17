import Vue from 'vue'
import Router from 'vue-router'
// 引入home组件
import Home from './views/home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // routes 配置项目路由的地方
  routes: [
    {
      // 在浏览器访问的地址 localhost:8080/home
      path: '/home1',
      name: 'home',
      // component 代表当前路由对应那个组件
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
