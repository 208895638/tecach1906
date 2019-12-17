import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
import axios from "@/api"
// 把axios作为vue的一个属性 那么在任何地方都可以进行调用
Vue.prototype.$ajax = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
