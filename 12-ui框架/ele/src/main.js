import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  不使用全局引入的方式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//  按需引入 
// import { Button , Input  , Checkbox , Select ,Option} from 'element-ui';
// Vue.use(Button).use(Input).use(Checkbox).use(Select).use(Option)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
