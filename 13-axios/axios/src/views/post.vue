<template>
  <div>
      post请求
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs"; // nodejs自带的模块 http file qs的作用把post传递的参数转换以下 

import { Loading } from 'element-ui';
export default {
    methods: {
        init(){
            //  1. post请求不传递参数 
            // axios.post(`http://59.110.138.169/api/test/user/fileList`)
            // .then((res)=>{
            //     console.log(res,this);
            //     // this.list = res.data.data;
            // })
            // 2. post附带参数   需要额外写一步操作
            // axios.post(`http://59.110.138.169/api/test/user/fileList`,qs.stringify({start:2,limit:5}))
            // .then((res)=>{
            //     console.log(res,this);
            //     // this.list = res.data.data;
            // })
            // 
            // 豆瓣电影需要加qs模块  
            // axios.post(`http://59.110.138.169/api/test/user/fileList`,qs.stringify({start:2,limit:5}))
            // .then((res)=>{
            //     console.log(res,this);
            //     // this.list = res.data.data;
            // })
            //  不需要加qs模块的post传值  
            // 
            // axios.post(`http://114.55.243.6:8080/user/login`,{
            //     loginType:0,
            //     mobile:18317774424,
            //     pwd:1,
            //     verifyCode:""
            // })
            // .then((res)=>{
            //     console.log(res);
            //     // this.list = res.data.data;
            // })
            // 1. 设置默认请求地址服务器地址
            // axios.defaults.baseURL = "http://59.110.138.168"; // 解决生产和开发的时候的服务器地址不一样的问题

            // axios.post(`/api/test/user/fileList`,qs.stringify({start:2,limit:5}))
            // .then((res)=>{
            //     console.log(res);
            //     // this.list = res.data.data;
            // })
            // 开发的时候访问的数据是开发时的数据库(测试数据库) 而生产的时候访问的数据是生产的数据库(线上的数据库)；
            // 开发时访问的服务器地址和访问的服务器地址不一样 所以ajax请求的地址不一样
            //  2. 设置超时时间 
            // axios.defaults.baseURL = "http://59.110.138.169";
            // axios.defaults.timeout = 3000 // 这里设置超时时间为5s 超出时间就会断开请求
            // axios.post(`/api/test/user/fileList`,qs.stringify({start:2,limit:5}))
            // .then((res)=>{
            //     console.log(res);
            //     // this.list = res.data.data;
            // })
            var lodings;
            axios.interceptors.request.use(function (config) {
                lodings = Loading.service();
                if(config.method == 'post'){
                    config.data = qs.stringify(config.data)
                }
               console.log(config)
                return config;
            }, function (error) {
                // 对请求失败做处理
                return Promise.reject(error);
            });
            // 
            axios.interceptors.response.use(function (config) {
                // 在请求之后做处理 如关闭loading
                lodings.close();
            // 对返回过来的数据进行过滤操作
                return config.data.data;
            }, function (error) {
                // 对请求失败做处理
                loadings.close();
                return Promise.reject(error);
            });
            axios.defaults.baseURL = "http://59.110.138.169";
            axios.defaults.timeout = 3000 // 这里设置超时时间为5s 超出时间就会断开请求
            axios.post(`/api/test/user/fileList`,{start:2,limit:5})
            .then((res)=>{
                console.log(res,1111);
                // this.list = res.data.data;
            })
        }
    },
    created () {
        this.init()
    }
}
</script>

<style>

</style>