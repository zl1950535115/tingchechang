<template>
  <div class="wrap" style="padding: 0px 24px 24px">
    <h2 style="padding: 20px 0px; margin-top: 10px;">教室管理</h2>
    <div class="content">
      <div class="content-cont">
        <div class="container">
          <el-button type="primary" class="container_btn">添加教室</el-button>
        </div>
        <div class="content_tables">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor">
            <el-table-column label="教室号">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassChart",
  data() {
    return {
      tableData: [
        {
          date: "1610C"
        },
        {
          date: "1610C"
        },
        {
          date: "1610C"
        },
        {
          date: "1610C"
        }
      ]
    };
  },
  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #f4f7f9;color: #000;font-weight: 500;width:100%; height: 53px;'
      }
    }
  },
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
</style>
