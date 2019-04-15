<template>
  <div class="usershow">
    <p class="title_size">用户展示</p>
    <div class="btndivs">
        <el-radio-group v-model="radioValue"  @change="selectValue"><el-radio-button   v-for="(item,index) in topbutton"    :key="index"   :label="item">{{item}}</el-radio-button></el-radio-group>
    </div>
    <p class="Title">{{radioValue}}</p>
    <div v-if="boxind==0" class="box_1">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
      cell-class-name="a"
        prop="username"
        label="用户名"
        width="360">
      </el-table-column>
      <el-table-column
        row-class-name="a"
        min-width="500"
        prop="pwd"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="userasign"
        label="身份">
      </el-table-column>
    </el-table>
    <el-pagination
      class="right_pagin"
      background
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>

    </div>
      <div v-if="boxind==1" class="box_1">
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="身份名称">
      </el-table-column>
    </el-table>
    <el-pagination
      class="right_pagin"
      background
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>
    </div>
      <div v-if="boxind==2" class="box_2">
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
      cell-class-name="a"
        align="center"
        prop="username"
        label="api权限名称"
        width="360">
      </el-table-column>
      <el-table-column
        align="center"
        prop="pwd"
        label="api权限url">
      </el-table-column>
      <el-table-column
        align="center"
        prop="userasign"
        label="api权限方法">
      </el-table-column>
    </el-table>
    <el-pagination
      class="right_pagin"
      background
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>
    </div>

     <div v-if="boxind==3" class="box_3">
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
      cell-class-name="a"
        align="center"
        prop="username"
        label="api权限名称"
        width="360">
      </el-table-column>
      <el-table-column
        align="center"
        prop="pwd"
        label="api权限url">
      </el-table-column>
      <el-table-column
        align="center"
        prop="userasign"
        label="api权限方法">
      </el-table-column>
    </el-table>
    <el-pagination
      class="right_pagin"
      background
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>

    </div>
    <div v-if="boxind==4" class="box_4">
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
      cell-class-name="a"
        align="center"
        prop="username"
        label="视图权限名称"
        width="360">
      </el-table-column>
      <el-table-column
        align="center"
        prop="pwd"
        label="视图id">
      </el-table-column>
    </el-table>
    <el-pagination
      class="right_pagin"
      background
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>
    </div>

    <div v-if="boxind==5" class="box_5">
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
      cell-class-name="a"
        align="center"
        prop="username"
        label="身份"
        width="360">
      </el-table-column>
      <el-table-column
        align="center"
        prop="pwd"
        label="视图名称">
      </el-table-column>
       <el-table-column
        align="center"
        prop="pwd"
        label="视图id">
      </el-table-column>
    </el-table>
    <el-pagination
      class="right_pagin"
      background
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
         topbutton:['用户数据','身份数据','api接口权限','身份和api接口关系','视图接口权限','身份和视图权限关系'],
         radioValue:"用户数据",
         boxind:0,
          tableData: [{
            username: '王小虎',
            pwd: '上海市普陀区金沙江路 1518 弄',
            userasign:"管理员"
          }, {
            username: '王小虎',
            pwd: '上海市普陀区金沙江路 1517 弄',
            userasign:"管理员"
          }, {
            username: '王小虎',
            pwd: '上海市普陀区金沙江路 1519 弄',
            userasign:"管理员"
          }]
      }
    },
    methods:{
      selectValue(e){
            this.boxind=this.topbutton.indexOf(e)//记录下标用于请求
      }
    }
}
</script>

<style>
  .usershow{
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
    background: #f0f2f5;
    padding: 24px;
    box-sizing: border-box;
  }
  .right_pagin{
    float:right;
    margin-top:10px;
  }
  .title_size{
    margin-left:15px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size:20px;
  }
  .user_btn{
   margin:0;
   border-radius:0;
  }
  .Title{
  margin-left:15px;
  font-size:25px;
  }
  .center{
    width:60%;
  }

</style>
