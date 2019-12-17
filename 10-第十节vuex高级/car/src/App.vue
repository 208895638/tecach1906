<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <div id="nav" v-if="$route.meta.isFootShow">
      <router-link to="/">首页</router-link> 
      <router-link to="/car">购物车</router-link>
      <router-link to="/user">个人信息</router-link>
    </div>
    
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow: auto;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 20px;
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:nth-child(2){
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
}
</style>
