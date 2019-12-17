<template>
  <div class="about">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="请输入用户名">
        <el-input v-model="formInline.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码">
        <el-input v-model="formInline.userpass" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
      </el-form-item>
    </el-form>
    <div>
      {{ val }}
      <el-button type="primary" @click="getMes">获取用户信息</el-button>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        formInline: {
          username: 18317774424,
          userpass: 1
        },
        val:""
      }
    },
    methods: {
      getMes(){
        this.$ajax.post("http://114.55.243.6:8080/userTask/list")
        .then(res =>{
          this.val = res;
          console.log(res);
        })
      },
      login() {
        this.$ajax.post("http://114.55.243.6:8080/user/login",{
          loginType :0,
          mobile:this.formInline.username,
          pwd:this.formInline.userpass,
          verifyCode:""
        })
        .then(res =>{
          this.$ajax.defaults.headers.common['user-session'] = res.data.sessionKey;
          // 设置这个值之后 以后请求数据的时候 后端就知道是谁在请求数据 然后返回对应的数据 
          console.log(res);
        })
        
      }
    }
  }
</script>

