<template>
  <div class="home">
    home页面 
    <ul>
      <!-- "/home>id=1" -->
      <!-- 推荐使用动态传值 -->
      <router-link :to="`/info/${item.id}`" tag="li"  v-for="item in list" :key="item.id">
        <img :src="item.img" alt="">
        {{ item.name }}
      </router-link>
     
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex"
export default {
  name: 'home',
  computed: {
    ...mapState({
      list:function(state){
        // console.log(state.car.list);
        return state.car.list
      } 
    })
  },
}
</script>

<style lang="scss" scoped>
ul{
  li{
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 10px;
    img{
      height: 40px;
    }
  }
}
</style>
