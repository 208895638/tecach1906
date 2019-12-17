<template>
  <div>
      <ul>
          <li v-for = "item in carList" :key="item.id">
              <input type="checkbox" v-model="item.isIpt">商品名称:{{ item.name }}  商品数量: {{ item.num }}  商品价格: {{ item.price }}
          </li>
      </ul>
      <div>
          <div>
              全选 <input type="checkbox" :checked="isAllChecked" @click="checkAll">
          </div>
           {{ total }}
      </div>
     
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex";
export default {
    computed: {
        ...mapState({
        //    carList:"car/carList"
            carList:(state)=>{
                return state.car.carList
            }
        }),
        ...mapGetters({
            total:"car/total",
            isAllChecked:"car/isAllChecked"
        })
    },
    methods: {
        ...mapMutations({
            checkAll:"car/checkAll"
        })
    }
}
</script>

<style>

</style>