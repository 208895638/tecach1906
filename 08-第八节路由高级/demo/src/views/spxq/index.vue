<template>
  <div class="">
      获取到的路由参数{{ id }}
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        id:""
    }
  },
//   watch: {
//       "$route":function(){

//       }
//   },
    beforeRouteUpdate(to,from ,next){ //在组件复用的时候被调用 
    // beforeRouteUpdate 没有解决组件复用问题 在组件复用的时候被调用 
        console.log("组件被复用！",to.params.id);
        this.id = to.params.id;
        next();
    },
  created () {
      this.id = this.$route.params.id;
  }
 }
</script>

<style lang='scss' scoped>
</style>