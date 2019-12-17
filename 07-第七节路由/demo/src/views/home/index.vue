<template>
  <div class="">
        <ul>
            <router-link tag="li" :to="`/home/info?id=${item.id}`" v-for="item in list" :key="item.id">{{ item.name }}</router-link>
        </ul>
        <!-- 把当前路由的子页面渲染到这个位置 -->
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        list:[
            {
                name:"白酒",
                id:1
            },
            {
                name:"啤酒",
                id:2
            },
            {
                name:"葡萄酒",
                id:3
            },
        ]
    }
  }
 }
</script>

<style lang='scss' scoped>
</style>