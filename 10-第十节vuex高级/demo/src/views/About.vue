<template>
  <div class="about">
    {{ count }} {{ count1 }}  {{ count2 }}  gettters:{{ countGetters }}
    <button @click="uptCount(2)">
      更改count
    </button>
    <button @click="uptCount1(3)">
      异步更改count
    </button>
  </div>
</template>
<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex"
export default {
  data () {
    return {
        
    }
  },
  computed: {
    ...mapState({
      count:"count" , // 第一个count是自己定义的属性名称 第二个count是state里面的count
      count1 :function(state){
        // console.log(this)  与本地的属性结合执行某些操作
        return state.count + "元";
      },
      count2:(state)=>{
        
        return state.count + "美元";
      }
    }),
    ...mapGetters({
      countGetters:"countGetters"  // countGetters => this.$store.getters.countGetters
    })
  },
  methods: {
    ...mapMutations({
      uptCount:"uptCount" // this.uptCount();  this.$store.commit("uptCount",2)
    }),
    ...mapActions({
      uptCount1:"uptCount" // this.uptCount  => this.$store.dispatch("uptCount",3)
    })
  }
}
</script>
