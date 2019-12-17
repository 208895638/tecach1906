import Vue from 'vue'
import Vuex from 'vuex'
import car from "./modules/car"
import user from "./modules/user"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{ // vuex提供的解决项目臃肿的方法 modules 叫做vuex的模块化
    // 在modules吧项目分成不同的结构
    car:car, // car 代表模块名称  第二个car代表这个模块名称所对应的模块
    user:user, // car 代表模块名称  第二个car代表这个模块名称所对应的模块
  }
})
