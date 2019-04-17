<template>
  <div class="wrapper">
    <p class="text">试卷列表</p>
    <div class="content">
      <div class="from">
        <span class="one">考试类型:</span>
        <el-select v-model="search.type" class="select">
          <el-option label="周考1" value="zhoukao1" />
          <el-option label="周考2" value="zhoukao2" />
          <el-option label="周考3" value="zhoukao3" />
          <el-option label="月考" value="yuekao" />
        </el-select>
        <span>课程:</span>
        <el-select v-model="search.course" class="select">
          <el-option label="周考1" value="zhoukao1" />
          <el-option label="周考2" value="zhoukao2" />
          <el-option label="周考3" value="zhoukao3" />
          <el-option label="月考" value="yuekao" />
        </el-select>
        <el-button class="btn" type="primary">
          <i class="el-icon-search" />
          查询
        </el-button>
      </div>
    </div>
    <div class="content">
      <div class="nav">
        <span>试卷列表</span>
        <div class="type">
          <span v-for="(item,index) in spanList" :key="index" :class="index == isIndex ? 'active_span' : '' " @click="changeType(index)">
            {{ item }}
          </span>
        </div>
      </div>
      <el-table :data="tableData" :header-cell-style="tableHeaderColor" style="width: 100%">
        <el-table-column label="试卷信息">
          <template slot-scope="scope">
            <p>{{ scope.row.date }}</p>
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column label="班级">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
            <p>{{ scope.row.name }}</p>
          </template>
        </el-table-column>
        <el-table-column label="创建人">
          <template :width="flexColumnWidth(column)">
            <span>详情</span>
          </template>
        </el-table-column>
        <el-table-column label="开始时间">
          <template>
            <span>详情</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间">
          <template>
            <span>详情</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="87">
          <template>
            <span class="detail">详情</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ExaminationPaperList',
  data() {
    return {
      spanList: ['全部', '进行中', '已结束'],
      isIndex: '',
      search: {
        type: '',
        course: ''
      },
      tableData: []
    }
  },
  created() {
    this.getExamsList()
  },
  computed: {
    ...mapState({
      
    })
  },
  methods: {
    ...mapActions({
      getExamsList: 'exams/getExamsList'
    }),
    // 点击改变样式
    changeType(type) {
      this.isIndex = type
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #f4f7f9;color: #000;font-weight: 500;width:100%; height: 53px;'
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  background: #f0f2f5;
  padding: 24px;
  box-sizing: border-box;
}
.text {
  line-height: 0;
  font-size: 20px;
  padding: 20px 0;
}
.content {
  padding: 24px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
}
.from {
  padding-bottom: 24px;
  box-sizing: border-box;
}
.btn {
  width: 150px;
  margin-left: -50px;
  background: blue;
}
.select {
  margin-right: 100px;
  width: 16.1%;
  min-width: 150px;
  margin-left: 10px;
}
.one {
  margin-left: 5%;
}
.content:nth-child(3) {
  margin-top: 20px;
}
.type {
  display: inline-block;
}
.active {
    color: blue;
    border-color: blue;
  }
.spans {
    margin: 0;
    color: skyblue;
    border: 1px solid #eee;
    display: inline-block;
    cursor: pointer;
    padding: 10px;
  }
.detail {
  color: blue
}
.type .active_span{
  /* margin-left: 88%; */
    color: blue;
    border-color:blue;
}
.type   span{
    border:1px solid #f4f7f9;
    padding:5px 15px;
    cursor: pointer;
  }
.nav{
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
}
</style>
