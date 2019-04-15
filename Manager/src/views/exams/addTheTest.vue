<template>
  <div class="wrapper">
    <p class="text">添加考试</p>
    <div class="content">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
        <el-form-item class="babels" label="试卷名称" prop="name">
          <br>
          <el-input v-model="ruleForm.name" class="name" />
        </el-form-item>
        <el-form-item class="babels" label="选择考试类型" prop="region1">
          <br>
          <el-select v-model="ruleForm.region1" class="select" style="width: 120px;">
            <el-option label="周考1" value="zhoukao1" />
            <el-option label="周考2" value="zhoukao2" />
            <el-option label="周考3" value="zhoukao3" />
            <el-option label="月考" value="yuekao" />
          </el-select>
        </el-form-item>
        <el-form-item class="babels" label="选择课程" prop="region2">
          <br>
          <el-select v-model="ruleForm.region2" class="select" style="width: 120px;">
            <el-option label="周考1" value="zhoukao1" />
            <el-option label="周考2" value="zhoukao2" />
            <el-option label="周考3" value="zhoukao3" />
            <el-option label="月考" value="yuekao" />
          </el-select>
        </el-form-item>
        <el-form-item class="babels" label="设置题量" prop="num">
          <br>
          <el-input-number v-model="ruleForm.num" style="width: 90px" controls-position="right" :min="3" :max="10" />
        </el-form-item>
        <el-form-item class="babels" label="考试时间" required>
          <br>
          <el-col :span="11" class="item">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" style="width:100%;" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11" class="item">
            <el-form-item prop="date2">
              <el-date-picker v-model="ruleForm.date2" type="date" style="width:100%;" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-button class="btn" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTheTest',
  data() {
    return {
      ruleForm: {
        num: 3,
        name: '',
        region1: '',
        region2: '',
        date1: '',
        date2: '',
        delivery: false
      },
      rules: {
        name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region1: [
          { required: true, message: '请选择考试类型', trigger: 'change' }
        ],
        region2: [
          { required: true, message: '请选择课程', trigger: 'change' }
        ],
        num: [
          { required: true, message: '请选择题量', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    line-height: 0
  }

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
    background: #FFF;
    border-radius: 10px;
  }

  .content p {
    display: flex;
    span {
      padding-top: 3px;
      padding-right: 5px;
      color: red;
    }
  }

  .item {
    width: 185px;
    margin-top: 10px;
  }

  .line {
    margin-top: 10px;
    width: 30px;
    text-align: center;
    height: 32px;
  }

  .babels {
    box-sizing: border-box;
    padding-bottom: 10px
  }

  .name {
    margin-top: 10px;
    width: 400px;
    height: 32px;
  }

  .select {
    margin-top: 10px;
    height: 32px;
  }

  .btn {
    margin-top: 20px;
    width: 136px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    background: blue;
  }

</style>
