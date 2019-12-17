import Vue from 'vue'
// vuex插件
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 全局的数据仓库 在任何组件中都可以访问state  this.$store.state.name
    name:"张三", // 修改state里面的数据之后 在其他组件引用的这个数据也会发生改变
    list:[
      {
        name:"白酒",
        id:1,
        num : 10
      },
      {
        name:"啤酒",
        id:2,
        num : 20
      },
      {
        name:"葡萄酒",
        id:3,
        num : 30
      },
    ]
  },
  mutations: { // 对state里面的数据进行修改是写在mutations mutations 相当于组件中的methods
    uptList({ list },{num1 , num2}){ // state 参数 就是全局的数据仓库 this.$store.commit(uptList , 2/4/5);
      // console.log(val , val1)
      var obj = list.find(ele => ele.id == 1); 
      obj.num = obj.num + num1 ;
    },
    uptName(state){
      state.name = "王五"
    }
  },
  actions: { // actions 跟mutations 一样 都是写函数的地方 mutations 里面写的是同步的函数 actions 里面写的是异步的函数()
    // actions 里面一般执行的是ajax操作 
    uptName(context){  // this.$store.dispatch("uptName")  dispatch  分发
      console.log(context);
      // 在action里面对state里面的数据进行修改有两种方式   
      // 1. context.state 直接对数据进行修改
      // setTimeout(()=>{
      //   context.state.name = "李四"
      // },200)
      // 2.context.commit 在异步函数里面提交同步函数
      setTimeout(()=>{
         context.commit("uptName");
      },500)
     
    }
  },
  getters:{ // 相当与组件中的计算属性
    numGetter(state){ // this.$store.getters.numGetter
      return state.name + "位于郑州" 
    }
  },
  mudule:{
    
  }
})
