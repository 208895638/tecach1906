import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'

Vue.config.productionTip = false

import { Button } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';
import { Icon } from 'vant';
import { DatetimePicker } from 'vant';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';
import { List , NavBar , Cell } from 'vant';
 
Vue.use(List).use(NavBar).use(Cell);
Vue.use(Button).use(Checkbox).use(CheckboxGroup).use(Icon).use(Popup).use(DatetimePicker).use(PullRefresh).use(Toast);
// 全局安装 
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
