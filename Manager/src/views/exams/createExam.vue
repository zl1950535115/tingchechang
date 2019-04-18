<template>
  <div class="add-layout">
    <h2>创建试卷</h2>
    <div class="add-layout-content">
      <el-button plain @click="showDialog">添加新题</el-button>
      <div class="content-list">
        <div class="top-title">
          <h3>{{pageDetail.title}}</h3>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        </div>
        <div class="list">
          <div v-for="(item , index) in pageDetail.questions" class="content-list-style">
            <h4>{{index + 1}}.{{item.title}}  <el-button type="text" @click="del">删除</el-button></h4>
            <p class="text"></p>
            <div class="code">
            {{item.questions_stem}}
            </div>
          </div>
        </div>
      </div>
      <el-button type="primary" @click='create'>创建试卷</el-button>
    </div>
    <!-- <div v-show="flag" class="add-drawer">
      <div class="mask" />
      <div class="add-drawer-right">
        <p>所有试题</p>
        <ul>
          <li>
        
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
let moment = require('moment');
export default {
  data() {
    return {
      pageDetail: {},
      flag: false
    }
  },
  created() {
    this.pageDetail = JSON.parse(window.localStorage.getItem('exam'))
    console.log(this.pageDetail)
    let h = this.pageDetail.end_time - this.pageDetail.start_time;
    // var t1=moment(1411641720000).format('YYYY-MM-DD HH:mm:ss');
    console.log(moment(this.pageDetail.end_time).format('YYYY-MM-DD HH:mm'))
    let arr = [];
    this.pageDetail.questions.forEach(item => {
      arr.push(item.questions_id)
    });
    this.question_ids =  JSON.stringify(arr);
    console.log(JSON.stringify(arr))
  },
  methods: {
    ...mapActions({
      delText: 'exams/del',
      renewal: 'exams/renewal'
    }),
    showDialog() {
      // this.flag = !this.flag
    },
    del() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        console.log('success')
        this.delText()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    async create() {
      // 要用exam_exam_id 的字符串
      let data = {question_ids:this.question_ids}
      let res = await this.renewal({header: this.pageDetail.exam_exam_id,data })
      console.log(res)
      // this.$router.push({ path:'examinationPaperList' })
    }
  }
}
</script>

<style scoped>  
  .list .content-list-style{
   border: 1px solid #eee;
   padding: 10px 20px;
   padding-bottom: -50px;
   margin-top: 30px;
  line-height: 30px;
  }
  .code{
    line-height: 25px;
    margin-top: -20px;
    overflow: hidden;
    padding: 0;
    background: #eee;
  }
/* .add-drawer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
} */
/* .add-drawer-right{
  width: 40%;
  height: 100%;
  position: relative;
  float: right;
  background-color: #fff;
  border: 0;
  background-clip: padding-box;
  z-index: 1;
} */
.add-layout {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  padding: 0px 24px 24px;
}
h2 {
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 1.5em;
}
.add-layout-content {
  width: 100%;
  height: 100%;
  flex: auto;
  min-height: 0;
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
}
h3,h4{
  font-weight: normal;
  display: block;
  font-size: 1.3em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
h4{
  font-size: 1.0em;
  display: flex;
  justify-content: space-between;
}
.content-list {
  width: 100%;
}
.top-title {
  text-align: center;
}
</style>
