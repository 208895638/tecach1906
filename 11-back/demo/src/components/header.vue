<template>
  <div class="top">
      <router-link to="/home" tag="div" class="left">
          电商网站
      </router-link>
      <!-- <router-link to="/info/1" tag="div" class="left">
          商品详情1
      </router-link>
      <router-link to="/info/2" tag="div" class="left">
          商品详情2
      </router-link> -->
      <div class="right">
          <div @click="logout">
              退出登陆
          </div>
          <div>
              {{ username }}
          </div>
          <router-link to="/car" tag="div">购物车<div class="circle" v-if="carLength != 0">{{ carLength }}</div></router-link>
          
      </div>
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex"
export default {
    computed: {
        ...mapState({
            username : function(state) {
                return state.userModule.username
            },
            carLength : function(state) {
                return state.car.carList.length
            },
        })
    },
    methods: {
        logout(){
            localStorage.clear();
            // 需不需要清除vuex里面的 用户名
            // 不需要清除vuex里面的username
            this.$router.push("/login");
        }
    }
}
</script>

<style lang="scss" scoped>
.top{
    height:48px;
    display: flex;
    align-items: center;
    background: #000;
    color: #fff;
    justify-content: space-between;
    padding:0 32px;
    .right{
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            margin-right: 32px;
            line-height: 21px;
        }
        div:nth-child(2){
            display: flex;
            align-items: center;
            
        }
        div:last-child{
             margin-right: 0px;
        }
        .circle{
            display: inline-block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 50%;
            background: #ff5500;
            color: #fff;
            font-size: 12px;
        }
    }
}
</style>