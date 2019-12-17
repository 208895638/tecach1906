<template>
  <div id="app">
    <div id="nav">
      <!-- <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <i class="el-icon-check"></i>
      <el-button type="primary" icon="el-icon-search" size="medium" circle></el-button>
      <el-checkbox v-model="checked" @change="cha">备选项</el-checkbox>
      <el-select v-model="value" placeholder="请选择" @change="aa">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input:"",
      checked:true,
      disabled:true,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  methods: {
    cha(val){
      console.log(val)
    },
    aa(val){
 console.log(val)
    }
  }
}
</script>
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
