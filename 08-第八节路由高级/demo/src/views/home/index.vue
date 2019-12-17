<template>
  <div class="home">
      home首页
  </div>
</template>

<script>
var timer ;
export default {
  name: '',
  data() { 
    return {

    }
  },
  created () {
      timer = setInterval(()=>{
          console.log(1)
      },300)
  },
//   beforeRouteEnter(to, from, next){ // 这个守卫一般不做啥操作

//   },
  beforeRouteUpdate(to, from, next){ // 解决组件的复用问题 组件复用的时候执行的钩子函数

  },
  beforeRouteLeave (to, from, next) { // 组件离开的时候执行的钩子函数
  // 作用 一般用于清除定时器
    // console.log(to, from)
    clearInterval(timer);
     next();
  }
    // destroyed () {  // 在组件销毁的时候调用的生命周期函数
    // //作用 一般用于清除定时器
    //     console.log("销毁");
    //     clearInterval(timer);
    // }
    // beforeRouteLeave  destroyed  主要区别是 beforeRouteLeave 可以控制页面间的跳转
 }
</script>

<style lang='scss' scoped>
.home{
    height: 900px;
    background: red;
}
</style>