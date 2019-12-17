<template>
  <div class="home">
     <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}

        <img :src="item.images.large" alt="">
      </li>
    </ul>
    <h2>
      修改每页的数据 
      <select name="" id="" v-model="limit" @change="upt">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </h2>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
export default {
  name: 'home',
  data(){
    return {
      start:1,
      limit:10,
      list:[]
    }
  },
  methods: {
    init(){
      axios.get(`http://59.110.138.169/api/douban/movie/in_theaters?start=${this.start}&limit=${this.limit}`)
      .then((res)=>{
        console.log(res,this);
        this.list = res.data.data;
      })
    },
    upt(){
      console.log(this.limit);
      this.init();
    }
  },
  created () {
    this.init();
  }
}
</script>
<style lang="scss" scoped>
ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
}
li{
  display: flex;
  align-items: center;
  width: 49%;
  img{
    height:100px;
  }
}
</style>