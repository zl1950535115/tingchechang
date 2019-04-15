<template>
  <div class="wrap" style="padding: 0px 24px 24px">
    <h2 style="padding: 20px 0px; margin-top: 10px;">班级管理</h2>
    <div class="content">
      <div class="content-cont">
        <div class="container">
          <el-button type="primary" class="container_btn">添加班级</el-button>
        </div>
        <div class="content_tables">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor">
            <el-table-column prop="date" label="班级名" width="200" />
            <el-table-column prop="name" label="课程名" width="380" />
            <el-table-column prop="address" label="教室号" />
            <el-table-column prop="xiugai" label="操作"><a style="color: #0139FD;">修改</a>|<a style="color: #0139FD;">删除</a></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '1610C',
        name: '渐进式开发(react)',
        address: '34308'
      }, {
        date: '1610C',
        name: '渐进式开发(react)',
        address: '34308'
      }, {
        date: '1610C',
        name: '渐进式开发(react)',
        address: '34308'
      }, {
        date: '1610C',
        name: '渐进式开发(react)',
        address: '34308'
      }]
    }
  },
  methods: {
    // 头部颜色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #f4f7f9;color: #000;font-weight: 500;width:100%; height: 53px;'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  background: #f0f2f5;
}
h2 {
  font-weight: 500;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
}
.content-cont {
  width: 100%;
  height: 100%;
  padding: 24px;
  margin: 0px 0px 20px;
}
.content_tables{
  padding-top:10px;
}
// .container{
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// }
</style>
