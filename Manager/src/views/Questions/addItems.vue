<template>
  <div class="chart-container">
    <div class="tittle">试题管理</div>
    <div class="box">
      <div class="inp">
        <p>题目信息</p>
        <p>题干</p>
        <el-input placeholder="请输入题目标题,不超过20个字" v-model="input10" clearable class="elinput">
        </el-input>
      </div>
      <div class="textear">
        <p>题目主题</p>
        <div class="editor-container">
          <markdown-editor v-model="content1" height="300px" class="mark" />
        </div v-html="html">
      </div>
      <div class="select">
        <P>请选择考试类型</P>
        <el-select v-model="select" slot="prepend" placeholder="请选择" class="sel">
          <el-option label="周考1" value="1"></el-option>
          <el-option label="周考2" value="2"></el-option>
          <el-option label="周考3" value="3"></el-option>
          <el-option label="月考" value="3"></el-option>
        </el-select>
      </div>
      <div class="select">
        <P>选择课程类型</P>
        <el-select v-model="select" slot="prepend" placeholder="请选择" class="sel">
          <el-option label="周考1" value="1"></el-option>
          <el-option label="周考2" value="2"></el-option>
          <el-option label="周考3" value="3"></el-option>
          <el-option label="月考" value="3"></el-option>
        </el-select>
      </div>
      <div class="select">
        <P>选择题目类型</P>
        <el-select v-model="select" slot="prepend" placeholder="请选择" class="sel">
          <el-option label="周考1" value="1"></el-option>
          <el-option label="周考2" value="2"></el-option>
          <el-option label="周考3" value="3"></el-option>
          <el-option label="月考" value="3"></el-option>
        </el-select>
      </div>
      <div class="textear">
        <p>题目主题</p>
        <div class="editor-container">
          <markdown-editor v-model="content1" height="300px" class="mark" />
        </div v-html="html">
      </div>
      <div class="btn">
        <el-button type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    import MarkdownEditor from '@/components/MarkdownEditor'
    export default {
        name: 'MarkdownDemo',
        components: {
            MarkdownEditor
        },
        data() {
            return {
                input3: '123',
                input4: '',
                input5: '',
                select: '',
                input10: '',
                content1: ''
            }
        },
        computed: {
            language() {
                return this.languageTypeList[this.$store.getters.language]
            }
        },
        methods: {
            getHtml() {
                this.html = this.$refs.markdownEditor.getHtml()
                console.log(this.html)
            }
        }
    }
</script>

<style scoped>
    .chart-container {
        position: relative;
        width: 100%;
        height: calc(100vh - 84px);
        background: #ccc;
        height: 100%;
    }
    
    .tittle {
        padding: 30px 15px;
        font-size: 30px;
    }
    
    .box {
        width: 96%;
        height: 100%;
        background: #fff;
        margin: 0 auto;
        border-radius: 15px;
        margin-bottom: 20px;
    }
    
    .inp p {
        width: 100% !important;
        height: 0 !important;
        padding-top: 20px;
        padding-left: 15px;
    }
    
    .elinput {
        padding-top: 20px;
        padding-left: 15px;
        width: 400px;
    }
    
    .editor-container {
        margin-bottom: 30px;
    }
    
    .tag-title {
        margin-bottom: 5px;
    }
    
    .mark {
        width: 98% !important;
        height: 300px !important;
        margin: 0 auto;
    }
    
    .textear p {
        padding-left: 1%;
    }
    
    .el-select .el-input {
        width: 130px;
    }
    
    .select p {
        padding: 10px;
        padding-left: 20px;
    }
    
    .select .sel {
        padding: 10px;
        padding-left: 20px;
    }
    
    .btn {
        margin: 20px;
    }
</style>