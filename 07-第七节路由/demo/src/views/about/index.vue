<template>
  <div class="">
      about页面 {{ $route.query.id }} {{ $route.query.age }}
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  created () {
    //   query 类似与get传值 query传值是直接在地址栏中拼接需要传递的参数
    // 接收query传值 使用的方式是 this.$route.query 
    // $route 当前的路由的对象
    // $router 所有的路由 代指路由配置文件
      console.log(this.$route.query)
  }
 }
</script>

<style lang='scss' scoped>
</style>