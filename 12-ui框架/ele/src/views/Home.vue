<template>
  <div class="home">
    <!-- data 传递给表格的数据  -->
    <!-- el-table-column  里面的prop 就是字段 label 就是字段对应的名称  -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
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
  data () {
    return {
      tableData:[
        {
          date:"2019",
          name:"张三",
          address:"郑州"
        },
        {
          date:"2018",
          name:"张三",
          address:"郑州"
        },
      ]
    }
  }
}
</script>
