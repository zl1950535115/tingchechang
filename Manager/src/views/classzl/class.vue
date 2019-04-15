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
            <el-table-column prop="date" label="班级名" width="200"/>
            <el-table-column prop="name" label="课程名" width="380"/>
            <el-table-column prop="address" label="教室号"/>
            <el-table-column prop="xiugai" label="操作">
              <a style="color: #0139FD;" @click="dialogFormVisible = true">修改</a>|
              <a style="color: #0139FD;">删除</a>
            </el-table-column>
          </el-table>
        </div>
        <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="班级名：" prop="name" style="margin-left:-20px"></el-form-item>
            <el-input v-model="ruleForm.name"></el-input>
            <el-form-item label="教室号：" prop="region" style="margin-left:-20px"></el-form-item>
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-form-item label="课程名：" prop="course" style="margin-left:-20px"></el-form-item>
            <el-select v-model="ruleForm.course" placeholder="请选择活动区域" style="width:100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1610C",
          name: "渐进式开发(react)",
          address: "34308"
        },
        {
          date: "1610C",
          name: "渐进式开发(react)",
          address: "34308"
        },
        {
          date: "1610C",
          name: "渐进式开发(react)",
          address: "34308"
        },
        {
          date: "1610C",
          name: "渐进式开发(react)",
          address: "34308"
        }
      ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        ruleForm: {
          name: '',
          region: '',
          course:''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          course:[
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
    };
  },
  methods: {
    // 头部颜色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #f4f7f9;color: #000;font-weight: 500;width:100%; height: 53px;";
      }
    }
  }
};
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
.content_tables {
  padding-top: 10px;
}
.el-form-item{
  margin-bottom:0;
}
// .container{
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// }
</style>
