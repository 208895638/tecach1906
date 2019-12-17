<template>
  <div>
      {{ usernames }}
      <div>
          <label for="">用户名 : <input type="text" v-model="username"></label>
      </div>
      <div>
          <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;码 : <input type="password" ></label>
      </div>
      <button @click="login">
          登陆
      </button>
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex"
export default {
    data () {
        return {
            username:""
        }
    },
    computed: {
        num(){
            return this.$store.state.userModule.username
        },
        ...mapState({
            usernames:function(state){
                return state.userModule.username 
            }
        })
    },
    methods: {
        login(){
            // 执行vuex里面的方法 
            // this.$store.commit("userModule/addUserName",this.username);
            //把usename存放到本地 
            localStorage.setItem("user",JSON.parse(this.username))
            this.addUserName(this.username);

            this.$router.push("/home");
        },
        ...mapMutations({
            addUserName:"userModule/addUserName"
        })
    }
}
</script>

<style>

</style>