<template>
  <div class="car">
      <div class="mains">
          <ul >
              <li v-for="item in carList" :key="item.id">
                  <input v-model="item.isChecked" type="checkbox"> {{ item.name }} <span>{{ item.price }}</span>
                  <div>
                        <van-stepper v-model="item.num"  :max="item.maxNum" />
                        <!-- <button @click="inc(item.id)">-</button>
                        {{ item.num }} -->
                        <!-- 使用ui框架的时候  -->
                        <!-- <button @click="add(item.id)" :disabled="item.num == item.num1">+</button> -->
                  </div>

              </li>
          </ul>
      </div>
      <div class="fot">
            <div>
                <input type="checkbox" :checked = "isAllchecked" @click="uptCheck"> 全选
            </div>
            <div>
                总价 {{ totalPrice }}
            </div>
      </div>
  </div>
</template>

<script>
import { mapState , mapGetters , mapMutations } from "vuex"
export default {
  name: '',
  data() { 
    return {

    }
  },
  computed: {
      ...mapState({
          carList:function(state){
              return state.car.carList
          }
      }),
      ...mapGetters({
          isAllchecked:"car/isAllchecked",
          totalPrice:"car/totalPrice"
      })
  },
  methods: {
      ...mapMutations({
          uptCheck:"car/uptCheck",
          inc:"car/inc",
           add:"car/add"
      }),
  }
 }
</script>

<style lang='scss' scoped>
.car{
    height: 100%;
    display: flex;
    flex-direction: column;
    .mains{
        flex: 1;
        overflow: auto;
        ul{
            li{
                display: flex;
                align-items: center;
                padding: 10px;
                span{
                    color: red;
                }
            }
        }
    }
    .fot{
        height: 40px;
    }
}
</style>