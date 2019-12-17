import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from './store'
import "@/assets/css/animate.css";
Vue.config.productionTip = false

// router.beforeEach 全局前置守卫
// 每次路由变化的时候都会经过这个守卫
// router.beforeEach((to, from, next) => { // 在路由进入之前执行的守卫
//     // to 代表需要进入的路由对象
//     // from 代表上一个路由对象
//      // a =》 b b 就代表to a就代表from 
//      // 控制导航的取消或者跳转通过next进行
//      console.log(to, from ,next)
     
//     //  在进入详情页之前先判断一下有没有权限进入
//     if(to.path == "/info"){
//       if(localStorage.getItem("key")){
//         next();
//       }else{
//         // next(false);  取消导航
//         alert("用户未登陆");
//         next({path:"/login"});
//       }
//     }else{
//       next();
//     }
    
// })
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
  if(to.meta.requireAuth){ // requireAuth 作用就是告诉导航守卫当前页面需要判断才能进入
    if(localStorage.getItem("key")){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
