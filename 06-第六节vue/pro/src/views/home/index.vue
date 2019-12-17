<template>
  <div class="" id="app">
      
     <lists class="com" :img.sync="img" :is-mask-show.sync="isMaskShow" @delparentlist="del" v-for="item in list" :key="item.id" :id="item.id" :text.sync="item.text" :src="item.src" :is-input-show.sync="item.isInputSHow"></lists>
    <div class="mask" v-if="isMaskShow" @click="isMaskShow = false">
        <img :src="img" alt="" @click.stop="">
    </div>
  </div>
</template>

<script>
// 引入封装的组件
import lists from "./components/Home";
import mocks from "mockjs";
import img1 from "../.././assets/logo.png";
// @相对路径 @代表src目录
import imgs from "@/assets/logo.png";
var mock = mocks.Random;
export default {
  name: '',
 data() {
                return {
                    list:"",
                    img:"",
                    isMaskShow:false
                };
            },
   methods: {
                del(val){
                    var index = this.list.findIndex(ele => ele.id == val);
                    this.list.splice(index,1);
                },
                init(){
                    var arr = [];
                    for(var i = 0; i<5 ; i++){
                        var obj = {
                            id:mock.guid(),
                            src:mock.dataImage("200x100"),
                            text:mock.ctitle(),
                            isInputShow:false
                        };
                        arr.push(obj)
                    };
                    this.list = arr;
                }
            },
  created () {
                this.init();
            },
  // 注册引入的组件
  components: {
      lists
  }
 }
</script>

<style lang='scss' scoped>
*{
            margin: 0;
            padding: 0;
        }
        #app{
            display: flex;
            align-items: center;
            width: 800px;
            margin: 100px auto;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .com{
            width: 200px;
            margin: 40px 0;
            border: 1px solid red;
        }
        body,html{
            width: 100%;
            height:100%;

        }
        .mask{
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0,0,0,.6);
            display: flex;
            align-items: center;
            justify-content: center;
        }

</style>