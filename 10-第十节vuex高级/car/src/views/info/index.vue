<template>
  <div class="info">
      <!-- $route  当前路由对象  -->
      <!-- $router 所有的路由 -->
      <div class="top">
          <div class="l" @click="$router.go(-1)">
              &lt;
          </div>
          <div class="c">
              {{ obj.name }} 
          </div>
          <div class="l">
              &nbsp;
          </div>
      </div>
      <div class="cen">
          <img :src="obj.img" alt="">
          <div>
              {{ obj.info }}
              <div>
                  {{ obj.num }}
              </div>

          </div>
      </div>
      <div class="fot" @click="addCar(obj)">
          添加到购物车{{ total }}
      </div>
      <!-- {{ $route.params.id }}
      <button @click="btn">跳转首页</button> -->
  </div>
</template>

<script>
import { mapState , mapMutations , mapGetters } from "vuex"
export default { 
  name: '',
  data() { 
    return {

    }
  },
  computed: {
      ...mapState({
          obj:function(state){
              return state.car.list.find(ele => ele.id == this.$route.params.id);
          }
      }),
      ...mapGetters({
          total:"car/carNum"
      })
  },
  methods: {
      ...mapMutations({
          addCar:"car/addCar"
      }),
      btn(){
          this.$router.push("/")
      }
  }
 }
</script>

<style lang='scss' scoped>
.info{
    height: 100%;
    display: flex;
    flex-direction: column;
    .top,.fot{
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .c{
            flex: 1;
        }
    }
    .cen{
        flex:1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .fot{
        justify-content: center;
    }
}
</style>