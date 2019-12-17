<template>
  <div id="app">
    <!-- <van-button type="primary">默认按钮</van-button>
    <van-checkbox v-model="checked">复选框</van-checkbox> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <h2>px尺寸会自动转换成rem</h2>
    <van-icon name="chat-o" /> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked:true
    }
  }
}
</script>
<style lang="scss">
h2{
  font-size:40px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
