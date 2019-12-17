<template>
  <div class="home">
    <h2>
      {{ $store.state.name }}   {{ names }}
    </h2>
    <ul>
      <li v-for="item in lists" :key="item.id">
        商品名称{{ item.name }} 商品数量{{ item.num }}
      </li>
    </ul>
    <button @click="upt">
      修改store里面的数据
    </button>
    <button @click="uptName">
      修改name
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    lists(){
      return this.$store.state.list
    },
    names(){
      return this.$store.getters.numGetter
    }
  },
  methods: {
    upt(){
      // 非常不推荐
      this.$store.state.name = "李四"
    },
    uptName(){
      this.$store.dispatch("uptName");
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
