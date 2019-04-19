<template>
  <div class="wrap" style="padding: 0px 24px 24px">
    <h2 style="padding: 20px 0px; margin-top: 10px;">学生管理</h2>
    <div class="content">
      <div class="content-cont">
        <div class="content_input">
          <el-input v-model="input" placeholder="请输入学生姓名" class="el_flex" />
          <el-select v-model="rooms" placeholder="请选择教室号" class="el_flex">
            <el-option
              v-for="item in room"
              :key="item.room_id"
              :label="item.room_text"
              :value="item.room_text"
            />
          </el-select>
          <el-select v-model="grades" placeholder="班级号" class="el_flex">
            <el-option
              v-for="item in grade"
              :key="item.grade_id"
              :label="item.grade_name"
              :value="item.grade_name"
            />
          </el-select>
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">重置</el-button>
        </div>
        <div class="content_table">
          <el-table :data="list" style="width: 100%" :header-cell-style="tableHeaderColor">
            <el-table-column prop="student_name" label="姓名" width="150" />
            <el-table-column prop="student_id" label="学号" width="240" />
            <el-table-column prop="grade_name" label="班级" width="130" />
            <el-table-column prop="room_text" label="教室" width="150" />
            <el-table-column prop="student_pwd" label="密码" width="300" />
            <el-table-column prop="operation" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="block_wrap">
          <div class="block">
            <el-pagination
              :current-page.sync="currentpage"
              :page-size="pagesize"
              :total="list_size"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ClassChart',
  data() {
    return {
      currentpage: 1,
      pagesize: 10,
      input: '',
      rooms: '',
      grades: '',
      list: [],
      list_size: null
    }
  },
  computed: {
    ...mapState({
      studentlist: state => state.classmanagement.studentlist,
      grade: state => state.classmanagement.grade,
      room: state => state.classmanagement.room
    })
  },
  async created() {
    await this.getstudent()
    this.getgrade()
    this.getroom()
    this.list_size = this.studentlist.length
    this.list = this.studentlist.slice((this.currentpage - 1) * this.pagesize, this.currentpage * this.pagesize)
  },
  methods: {
    ...mapActions({
      getstudent: 'classmanagement/getstudent',
      getgrade: 'classmanagement/getgrade',
      getroom: 'classmanagement/getroom'
    }),
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #f4f7f9;color: #000;font-weight: 500;width:100%; height: 53px;'
      }
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentpage = val
      this.list = this.studentlist.slice((this.currentpage - 1) * this.pagesize, this.currentpage * this.pagesize)
    }
    // handleDelete(value) {
    //   console.log(value)
    // }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
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
}
.content-cont {
  width: 100%;
  height: 100%;
  margin: 0px 0px 20px;
}
.content_input {
  width: 100%;
  display: flex;
}
.el_flex {
  width: 16%;
  margin-right: 15px;
}
.content_table {
  margin-top: 10px;
}
.block_wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
