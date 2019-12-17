<template>
  <div>
     <ul>
         <li v-for="item in list" :key="item.id">
             商品名称:{{ item.name }}  商品数量: {{ item.num }}  商品价格: {{ item.price }}
             <button @click="addCar(item.id)">添加到购物车</button>
         </li>
     </ul>
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex";
export default {
    computed: {
        ...mapState({
            list:(state)=>{
                return state.car.list
            }
        })
    },
    methods: {
        ...mapMutations({
            addCar:"car/addCar"
        })
    }
}
</script>

<style>

</style>