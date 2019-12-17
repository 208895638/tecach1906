<template>
  <div class="home">
      <router-link tag="div" :to="`/info/${ item.id }`" v-for="item in list" :key="item.id" class="per">
          <div class="top">
              <img :src="item.image" alt="">
          </div>
          <div class="cen">
              {{ item.name }}
              <br>
              {{ item.sales }}
          </div>
          <div class="bot">
              ￥ {{ item.cost }}
          </div>
      </router-link>
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex"
export default {
    computed: {
        ...mapState({
            list:function(state){
                return state.car.list
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.home{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .per{
        width: 20%;
        margin: 20px;
        border:1px solid #ccc;
    }
}
</style>