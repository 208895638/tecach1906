<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}

        <img :src="item.images.large" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data () {
    return {
        list:[]
    }
  },
  created () {
    //http://59.110.138.169/api/douban/movie/in_theaters
    // get 请求
    // get/post 
    // put delete update
    // 1. get请求不附带参数 
    // axios.get("http://59.110.138.169/api/douban/movie/in_theaters",)
    // .then((res)=>{
    //   console.log(res,this);
    //   this.list = res.data.data;
    // })
    //  2. get请求附带参数
    // axios.get("http://59.110.138.169/api/douban/movie/in_theaters",{
    //   params:{
    //     start:2,
    //     limit:5
    //   }
    // })
    // .then((res)=>{
    //   console.log(res,this);
    //   this.list = res.data.data;
    // })
    // 3。 简化写法
     axios.get(`http://59.110.138.169/api/douban/movie/in_theaters?start=${2}&limit=${10}`)
    .then((res)=>{
      console.log(res,this);
      this.list = res.data.data;
    })
  }
}
</script>