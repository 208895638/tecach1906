<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link>|
      <router-link to="/login">登陆页</router-link>|
      <router-link to="/info">详情页</router-link>| 
      <router-link to="/spxq/1">商品详情页1</router-link>|
      <router-link to="/spxq/2">商品详情页2</router-link>|
    </div>
    <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeOutRightBig" mode="out-in">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<style lang="scss">
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
