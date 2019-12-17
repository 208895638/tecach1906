<template>
  <div class="">
      abouts页面
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  // 解决动态路由的复用 watch方法 监听路由的变化
  watch: {
    "$route":function(to , from ){ // to 路由去的地址 from 上一个路由
      console.log(to.params.id )
    }
  },
  created () {
      //  访问动态路由传递的参数 this.$route.params进行获取
      console.log(this.$route.params.id)
  }
 }
</script>

<style lang='scss' scoped>
</style>