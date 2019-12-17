import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { // 存放的全局的数据仓库
      count: 0,
      
    },
    mutations: { // m更改state 都在这个mutation里面进行更改 mutation执行的是同步操作 相当于组件中的methods
      increment (state) { // this.$store.commit(increment,)
        state.count++
      },
      uptCount(state,val){
        state.count  = state.count + val;
      },
      addCar(){ // 加入购物车

      },
      buynow(){ // 

      },
      incrementNum(){

      }
    },
    // mutations  actions 提交参数的时候只能提交一个参数 如果需要提交多个参数 可以把这多个参数合并 用数组或者对象的方式
    actions:{ // action执行的是异步操作也可以执行同步操作 ajax
        increment (context) { // this.$store.dispatch("increment")
            // state.count++
        //    1. context.state.count ++
        //  context.commit("increment")
        },
        uptCount(context,val){
            context.state.count = context.state.count + val;
        }
    },
    getters:{  // 相当与计算属性
        countGetters(state){
            return state.count + 1;
        }
    }
});
export default store