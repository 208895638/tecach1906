import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "@/api"// 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$ajax = axios;
//  这一步 作用 在调用axios 的时候 可以使用 this.$ajax
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
