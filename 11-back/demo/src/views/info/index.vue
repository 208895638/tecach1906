<template>
  <div class="info">
      <div class="top">
         
          <img :src="obj.image" alt="">
          <div>
              <div class="t">
                  {{ obj.name }}
              </div>
              <div class="bot">
                   {{ obj.cost }}
              </div>
              <button @click="addCar(obj)">
                  添加到购物车
              </button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex"
export default {
    data () {
        return {
            id:""
        }
    },
    computed: {
        ...mapState({
            carList:function(state){
                return state.car.carList;
            },
            obj:function(state){
                return state.car.list.find(ele => ele.id == this.id);
            }
        })
    },
    methods: {
        ...mapMutations({
            addCar:"car/addCar"
        })
    },
    created () {
        console.log(this.$route)
        this.id = this.$route.params.ids
    }
}
</script>

<style lang="scss" socped>
.info{
    .top{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>