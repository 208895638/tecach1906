<template>
  <div id="app">
    
    <div class="main">
      <router-view/>
    </div>
    <div id="nav" v-if="$route.meta.isFootShow">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/other">other</router-link>
    </div>
  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding: 0;
}
body,html{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex:1;
    overflow: auto;
  }
}
#nav {
  padding: 30px;
  border-top: 1px solid red;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
