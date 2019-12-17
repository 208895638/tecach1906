<template>
  <div class="home">
    car模块里面的属性{{ num }} user模块的属性{{ user }}  {{ price }}
    <button @click="upt">
      更改num值
    </button>
    <button @click="syncUpt">
      异步更改num值
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    num(){
      //console.log(this.$store)
      return this.$store.state.car.num; // 访问模块里面的属性 在state后面加上需要的模块名称
    },
    user(){
      return this.$store.state.user.num; // 访问模块里面的属性 在state后面加上需要的模块名称
    },
    price(){
      // return this.$store.getters.car/addNums;
      //return this.$store.getters.car["addNums"];
      // 获取模块里面的计算属性通过数组的方式进行获取
      return this.$store.getters["car/addNums"];
    }
  },
  methods: {
    upt(){
      console.log(this.$store)
      this.$store.commit("car/addNum"); // 执行模块里面的函数 需要在前面加上模块名称
      // this.$store.commit("addNum");
    },
    syncUpt(){
       this.$store.dispatch("car/syncAddNum"); // 执行模块里面的函数 需要在前面加上模块名称
    }
  }
}
</script>
