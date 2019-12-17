<template>
  <div>
      <table border="1" cellsapcing="0" cellspadding = "0">
          <tr>
              <th>商品信息</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
          </tr>
          <tr v-for="item in carLists" :key="item.id">
              <td>{{item.name}}</td>
              <td>{{item.price}}</td>
              <td> <button @click="add(item , 1)">+</button>{{item.num}} <button @click="inc(item , -1)">-</button>  </td>
              <td>{{item.totalPrice}}</td>
              <td>
                  <button @click="del(item.id)">删除</button>
              </td>
          </tr>
      </table>
      {{ totalPrice }}
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex"
export default {
    computed: {
        ...mapState({
            carList:function(state){
                return state.car.carList
            }
        }),
        ...mapGetters({
            carLists:"car/carLists",
            totalPrice:"car/totalPrice"
        })
    },
    methods: {
        ...mapMutations({
            incs:"car/inc",
            del:"car/del"
        }),
        add(val , val1){ // val  加减的数量
            var id = val.id;
            var num = val1;
            this.incs( { id , num })
        },
        inc(val , val1){
            var id = val.id;
            var num = val1;
            this.incs( { id , num })
        }
    }
}
</script>

<style lang="scss" scoped>
table{
    width: 100%;
    border-spacing: 0;
    th,td{
        padding:10px;
    }
}
</style>