<template>
  <div class="about">
     {{ obj }}
    <button @click="upt">白酒数量加减</button>
  </div>
</template>
<script>
export default {
  computed: {
    obj(){
      return this.$store.state.list[0]
    }
  },
  methods: {
    upt(){
      // 3 叫做载荷 本质就是参数 提交的时候只能提交一个参数 后面写多个参数不起作用
      this.$store.commit("uptList" , { num1:10 , num2 : 20 });
    }
  }
}
</script>
