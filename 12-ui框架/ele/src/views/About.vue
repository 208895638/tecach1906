<template>
  <div class="about">
    <!--  model 表单绑定的数据  label 展示的表单每一项的名称 -->
    <!-- Form 组件提供了表单验证的功能，
    只需要通过 rules 属性传入约定的验证规则，
    并将 Form-Item 的 prop 属性设置为需校验的字段名即可。 -->
    <el-form ref="form" :model="form" label-width="80px" :rules="rulesname">
      <el-form-item label="用户名" prop="username"><el-input v-model="form.username"></el-input></el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      var validateusername = (rule, value, callback) => {
        if (!value) {
          // 返回出去的信息 callback
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      var validatepass = (rule, value, callback) => {
        if (!value) {
          // 返回出去的信息 callback
          return callback(new Error('密码不能为空'));
        }
         if (value.length < 6) {
          // 返回出去的信息 callback
          return callback(new Error('密码长度不能小于6'));
        }
        callback();
      };
      return {
        form: {
          username:"",
          pass:""
        },
        rulesname:{ // 校验规则
          username: [
            // validator 校验规则 trigger 表单类型的触发方式 blur
            { validator: validateusername, trigger: 'blur' }
          ],
          pass: [
            { validator: validatepass, trigger: 'blur' }
          ]
        }
      }
      
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>