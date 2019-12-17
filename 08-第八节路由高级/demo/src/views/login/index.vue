<template>
  <div class="login">
     <label for="">请输入用户名称:<input type="text" v-model="username"></label>
     <label for="">请输入用户密码:<input type="text" v-model="userpass"></label>
     <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
      username:"",
      userpass:""
    }
  },
  methods: {
    login(){
      var obj = {
        username:this.username,
        userpass:this.userpass,
      };
      localStorage.setItem("key",JSON.stringify(obj));
    }
  }
 }
</script>

<style lang='scss' scoped>
.login{
  height: 900px;
  background: blue;
}
</style>