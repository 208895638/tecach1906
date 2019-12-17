import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // 代表进入项目的时候默认展示的页面 
      name: 'home',
      component: Home,
      meta:{
        isFootShow:true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta:{
        isFootShow:true
      }
    }
    ,
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/index.vue'),
      meta:{
        isFootShow:true
      }
    }
    ,
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/car/index.vue'),
      beforeEnter(to , from , next){
        if(localStorage.getItem("token")){
          next()
        }else{
          next("/user")
        }
      },
      meta:{
        isFootShow:true
      }
    }
    ,
    {
      path: '/info/:id', // /info
      name: 'info',
      component: () => import('./views/info/index.vue'),
      meta:{
        isFootShow:false
      }
    }
  ]
})
