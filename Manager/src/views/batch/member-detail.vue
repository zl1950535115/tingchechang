<template>
  <div class="box">
    <h2 class="tit">阅卷</h2>
    <div class="main">
      <div class="main_left" />
      <div class="main_right">
        <h2 class="name">{{ name }}</h2>
        <div class="score">
          <p>得分:</p>
          <h1>{{ score }}</h1>
        </div>
        <div class="block">
          <el-slider v-model="score" class="slider" />
        </div>
        <div>
          <el-button class="button" type="submit" @click="dialogVisible = true">确定</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '王子音',
      score: 0,
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？').then(_ => {
        done()
      }).catch(_ => {})
    },
    formatTooltip(val) {
      return val / 100
    }
  }
}
</script>

<style scoped>
    .box{
        position: relative;
        width: 100%;
        height: calc(100vh - 64px);
        box-sizing: border-box;
        padding:0 24px 0 24px;
        background: #f0f2f5;
        margin-top: 64px;
        overflow: auto;
    }
    .slider{
        width: 86%;
        margin-left: 7%;
    }
    .tit{
        width: 100%;
        padding: 30px 0px 0px 0;
        margin-top: 0px;
        font-weight: normal;
        margin-bottom: 35px;
    }
    .main{
        width: 100%;
        margin-bottom:30px;
    }
    .main_left{
        width:74%;
        height: 200px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }
    .main_right{
        width: 20%;
        height: 261.5px;
        position: fixed;
        top:156px;
        right: 30px;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
    }
    .name{
        font-weight: normal;
        margin-left: 25px;
        margin-top: 40px;
    }
    .score{
        width: 100%;
        display: flex;
        padding-left:25px;
        box-sizing: border-box;
    }
    .score p{
        margin-top: 4px;
        font-size: 22px;
    }
    .score h1{
        margin-top: -5px;
        color:#0139FD ;
        font-weight: normal;
    }
    .button{
        width:111px;
        height:32px;
        background:#0139FD;
        color: #fff;
        font-size: 14px;
        margin-left: 25px;
        margin-top: 15px;
    }
</style>
