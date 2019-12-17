<template>
  <div class="">
      <div class="login" v-if="!token" :key="token">
          <label for="">用户名<input type="text" v-model="username" ></label>
          <label for="">密码<input type="password" v-model="userpass"></label>
          <button @click="login">登陆</button>
      </div>
      <div class="login" v-else>
          <h2>用户名 {{ token }}</h2>
          <button @click="logout">退出登陆</button>
      </div>
  </div>
</template>

<script>
import { mapState , mapMutations } from "vuex"
export default {
  name: '',
  data() { 
    return {
        isShow:localStorage.getItem("token"), // isShow 不会实时监听本地存储里面的值 只会在页面刚进入的来获取一次
        username:"",
        userpass:""
    }
  },
  computed: {
      ...mapState({
          token:function(state){
              return state.user.token
          }
      })
  },
  methods: {
      ...mapMutations({
          uptToken:"user/uptToken",
          clearToken:"user/clearToken"
      }),
      login(){
          // 在真实项目中 调取接口把用户名密码传递给后端 后端根据传递过来的用户名密码 生成一个唯一的token 会把token返回给我们
          // 返回之后 可以根据token 判断用户有没有登陆
          localStorage.setItem("token",this.username);
          this.uptToken(this.username);
      },
      logout(){
          localStorage.clear();  // 把本地的数据全部清除
          this.clearToken();
          this.username = "";
          this.userpass = "";
      }
  }
 }
</script>

<style lang='scss' scoped>
</style>