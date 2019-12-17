import Vue from 'vue'
import App from './App.vue'

import router from "./router/index.js"

import store from "./store"
Vue.config.productionTip = false

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
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
