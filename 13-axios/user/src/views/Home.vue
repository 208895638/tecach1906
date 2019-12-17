<template>
  <div class="home">
    <el-button type="primary" @click="dialogFormVisible = !dialogFormVisible;isIptShow = true;">添加</el-button>
    <div>
      <el-input v-model="searchVal"  placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="search">查找</el-button>
    </div>
    <div>
      <el-input v-model="username"  placeholder="请输入用户名"></el-input>
       <el-input v-model="userpass"  placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="login">登陆</el-button>
    </div>
      <div class="cen">
         <el-table
            :data="tableData"
            @row-dblclick = "upt"
            size="small"
            border
            style="width: 100%">
            <el-table-column
              prop="userId"
              label="id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="180">
            </el-table-column>
            <el-table-column
              prop="school"
              label="学校">
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="name"
              label="名称">
            </el-table-column>
            <el-table-column
              prop="avatar"
              label="头像地址">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄">
            </el-table-column>
          </el-table>
      </div>
      <div class="bot">
        <!-- current-page  当前页数 -->
        <!-- page-size 每页显示的数量 -->
        <!-- handleSizeChange  改变每页的数量触发的函数 -->
        <!-- current-change  第几页改变时触发的函数 -->
         <el-pagination
         background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="num"
          layout="sizes, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>

      <el-dialog @close="clear" title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input @change="checkUsername" v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item v-if="isIptShow" label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="头像地址" :label-width="formLabelWidth">
            <img v-if="!isIptShow" style="height:40px;" :src="'http://59.110.138.169/'+form.avatar" alt="">
            <el-upload
              class="upload-demo"
              action="http://59.110.138.169/api/test/user/upload"
              :on-success="imgs">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="请输入学校" :label-width="formLabelWidth">
            <el-input v-model="form.school" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="请输入性别" :label-width="formLabelWidth">
            <el-radio-group v-model="form.sex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
            <!-- <el-input v-model="form.sex" autocomplete="off"></el-input> -->
          </el-form-item>
          <el-form-item label="请输入名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="请输入年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <div v-if="isIptShow">
            <el-button type="primary" @click="add">添加</el-button>
          </div>
          <div v-else>
            <el-button type="primary" @click="postUptMes">修改</el-button>
            <el-button type="primary" @click="del">删除</el-button>
          </div>
        </div>
      </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      isIptShow:true,
      total:0,
      currentPage2:1,
      num:5,
      tableData:[],
      dialogFormVisible:false,
      form:{
        username:"",
        password:"",
        address:"",
        avatar:"",
        school:"",
        sex:"",
        name:"",
        age:"",
      },
      formLabelWidth: '120px',
      userId:"",
      searchVal:"",
      username:"",
      userpass:""
    }
  },
  methods: {
    search(){
      this.$ajax.get("/api/test/user/getUserInfo",{
        params:{
          id:this.searchVal
        }
      })
      .then(res =>{
        console.log(res)
      })
    },
    login(){
       this.$ajax.post("/api/test/user/doLogin",{
         username:this.username,
         password:this.userpass,
      })
      .then(res =>{
        console.log(res)
      })
    },
    clear(){
      this.form = {
        username:"",
        password:"",
        address:"",
        avatar:"",
        school:"",
        sex:"",
        name:"",
        age:"",
      }
    },
    postUptMes(){
      this.$ajax.post("/api/test/user/updateUserInfo",this.form)
      .then(res =>{
        console.log(res);
        if(res.code == "success"){
          this.isIptShow = true;
          this.dialogFormVisible = false;
          this.init();
        }
      })
    },
    del(){
      this.$ajax.get("/api/test/user/del",{
        params:{
          id:this.userId
        }
      })
      .then(res =>{
        console.log(res);
        if(res.code == "success"){
          this.isIptShow = true;
          this.dialogFormVisible = false;
          this.init();
        }
      })
    },
    upt(val){
      console.log(val,111);
      this.isIptShow = false;
      this.dialogFormVisible = true;
      this.form = val;
      this.userId = val.userId;
    },
    imgs(val){
      console.log(val,111);
      this.form.avatar = val.data;
    },
    checkUsername(){
      this.$ajax.post("/api/test/user/checkUserName",{
        username:this.form.username
      })
      .then(res =>{
        console.log(res);
        if(res.code == 'success'){
          
        }else{
          this.$message.error("用户名重复!");
        }
      })
    },
    add(){
      this.$ajax.post("/api/test/user/save",this.form)
      .then(res =>{
        console.log(res);
        if(res.code == "success"){
          this.$message({
            type:"success",
            message:"添加成功!"
          });
          this.dialogFormVisible = false;
          this.init();
        }else{
          this.$message.error("服务器错误,请稍后重试!");
        }
      })
    },
    handleSizeChange(val){
      console.log(val);
      this.num = val;
      this.init();
    },
    handleCurrentChange(val){
      this.currentPage2 = val;
      this.init();
    },
    init(){
      this.$ajax.get("/api/test/user/list",{
        params:{
          start:this.currentPage2,
          limit:this.num
        }
      })
      .then(res =>{
        console.log(res);
        this.tableData = res.data.list;
        this.total = res.data.totalRow;
      })
    }
  },
  created () {
    this.init();
  }
}
</script>
