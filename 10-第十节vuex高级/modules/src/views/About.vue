<template>
  <div class="about">
    <h1>{{ num }}  {{ num1 }}  {{ addNums }}</h1>
    <button @click="addNum">
      更改num值 
    </button>
    <button @click="syncAddNum">
      异步更改num值 
    </button>
  </div>
</template>
<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex";
// 使用模块化之后辅助函数的写法 直接在需要的属性或方法前面加上需要的模块名称
// 特殊的一点就是mapState 只能使用函数的方式进行获取
export default {
  computed: {
    ...mapState({
      // num:"car/num" // 这种方式获取不了模块化之后的state
      num:(state)=>{
        console.log(state)
        return state.car.num
      },
      num1(state){
        return state.car.num
      }
    }),
    ...mapGetters({
      addNums:"car/addNums"
    })
  },
  methods: {
    ...mapMutations({ // mapMutations辅助函数直接加上需要的模块名称
      addNum:"car/addNum"
    }),
    ...mapActions({ // mapMutations辅助函数直接加上需要的模块名称
      syncAddNum:"car/syncAddNum"
    }),
  }
}
</script>