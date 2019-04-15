<template>
  <div class="wrap" style="padding: 0px 24px 24px">
    <h2 style="padding: 20px 0px; margin-top: 10px;">学生管理</h2>
    <div class="content">
      <div class="content-cont">
        <div class="content_input">
          <el-input placeholder="输入学生姓名" class="el_flex" />
          <el-select v-model="value" placeholder="请选择教室号" class="el_flex">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="value" placeholder="班级号" class="el_flex">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">重置</el-button>
        </div>
        <div class="content_table">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor">
            <el-table-column prop="date" label="姓名" width="150" />
            <el-table-column prop="name" label="学号" width="240" />
            <el-table-column prop="address" label="班级" width="130" />
            <el-table-column prop="classroom" label="教室" width="150" />
            <el-table-column prop="paw" label="密码" width="300" />
            <el-table-column prop="operation" label="操作" />
          </el-table>
        </div>
        <div class="block_wrap">
          <div class="block">
            <el-pagination
              :current-page.sync="currentPage3"
              :page-size="10"
              :total="100"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassChart',
  data() {
    return {
      tableData: [
        {
          date: '1610C'
        },
        {
          date: '1610C'
        },
        {
          date: '1610C'
        },
        {
          date: '1610C'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  methods: {
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
