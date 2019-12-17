<template>
  <div class="home">
   {{ nums }}  getters {{ numGetter }}
   <button @click="uptNum">
     更改vuex count
   </button>
   <button @click="syncUptNum">
     异步更改vuex count
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
    nums(){
      return this.$store.state.count
    },
    numGetter(){
      return this.$store.getters.countGetters;
    }
  },
  methods: {
    uptNum(){
      this.$store.commit("uptCount",2)
    },
    syncUptNum(){
      this.$store.dispatch('uptCount', 3)
    }
  }
}
</script>
