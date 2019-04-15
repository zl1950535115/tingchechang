<template>
  <div class="containter">
      <div class="top">
        <p class="title_name">添加用户</p>
      </div>
        <div class="top_title">
            <div class="infos">
                 <el-button  plain v-for="(item,index) in addList" :class="index==ind?'active':''" :key="index" @click="tab(index)">{{item}}</el-button>
                  <div v-if="ind==0" class="addUser">
                    <el-input class="name_1" placeholder="请输入用户名" v-model="name" clearable></el-input>
                    <el-input class="pwd" placeholder="请输入密码" v-model="pwd" show-password></el-input>

                    <el-select class="select" v-model="select" slot="prepend" placeholder="请选择身份id">
                      <el-option v-for="(item,index) in list" :label="item" :key="index" :value="index"></el-option>
                    </el-select>
                    <div class="confim"><el-button type="primary" class="success" @click="adduser">确定</el-button><el-button class="reset" plain>重置</el-button></div>
                </div>
                <div v-if="ind==1" class="addUser">
                   <el-select class="select" v-model="userselect" @change="new_user" slot="prepend" placeholder="请选择身份ID">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                  </el-select>

                    <el-input class="new_name" placeholder="请输入用户名" v-model="new_name" clearable></el-input>
                    <el-input class="pwd" placeholder="请输入密码" v-model="new_pwd" show-password></el-input>

                    <el-select class="select" v-model="manger" slot="prepend" placeholder="请选择他/她的身份">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
                </div>
            </div>
            <div class="person">
                <el-button class="active add_person">添加身份</el-button>
                <el-input class="name_2" placeholder="请输入身份" v-model="person" clearable></el-input>
                 <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
            </div>
            <div class="add_api">
                <el-button class="active add_person">添加api接口权限</el-button>
                <el-input class="name_2" placeholder="请输入api接口权限名称" v-model="api_name" clearable></el-input>
                <el-input class="name_2" placeholder="请输入api接口权限url" v-model="api_url" clearable></el-input>
                <el-input class="name_2" placeholder="请输入api接口权限方法" v-model="api_fun" clearable></el-input>
                 <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
            </div>
             <div class="add_view">
                <el-button class="active view">添加视图接口权限</el-button>
                   <el-select class="select" v-model="view_select" slot="prepend" placeholder="请输入已有视图">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                 <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
            </div>
            <div class="add_api_seting">
                <el-button class="active apibtn">给身份设置api接口权限</el-button>
                   <el-select class="select" v-model="user_add_api"  placeholder="请选择身份id">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                      <el-select class="select" v-model="user_add_manger"  placeholder="请选择api接口权限">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                 <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
            </div>
            <div class="add_api_seting">
                <el-button class="active view_api">给身份设置视图权限</el-button>
                   <el-select class="select" v-model="user_view_manger"  placeholder="请选择身份id">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                      <el-select class="select" v-model="user_view_id"  placeholder="请选择视图权限id">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                 <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addList:['添加用户','更新用户'],
      select:"",//用于添加用户的下拉框下标
      addUserValue:null,//根据下标处理添加用户
      name:"",//添加用户名
      pwd:"",//添加密码
      ind:0,//tab切换下标
      userselect:"",//更新用户身份id的下拉框值下标
      manger:"",//更新用户的身份
      new_name:"",//更新用户的用户名
      new_pwd:"",//更新用户的密码
      person:"",//添加身份的输入框值
      api_name:"",//添加api接口权限名称值
      api_url:"",//添加api接口权限url的值
      api_fun:"",//添加api接口权限方法的值
      view_select:"",//添加视图接口权限下标值
      user_add_api:"",//添加用户身份id的下拉框下标
      user_add_manger:"",//添加api接口权限的下拉框下标
      user_view_manger:"",//试图全线给身份id下拉框下标
      user_view_id:"",//用户视图权限id
      list:['我的','你的','他的']
    }
  },
  methods:{
    tab(index){//用于第一个盒子tab切换
      this.ind=index
    },
    adduser(){//添加用户方法及取值
      this.addUserValue=this.list[this.select]
      if(this.name==""||this.addUserValue==null||this.pwd==""){
        this.$message.error('请检查未填写值');
      }else{
          //点击之后取消文本框值
          this.name="",this.pwd="",this.addUserValue=""
          this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'//这是我新提交的
        });
      }
    },
    new_user(){//更新用户的操作
        console.log(this.userselect)
    }
  }
}
</script>

<style>
  .apibtn{
    width:180px;
    text-align:center;
  }
  .view_api{
    width:160px;
  }
  .top{
    box-sizing:border-box;
    padding-top:15px;
  }
  .add_person{
    margin-bottom:10px;
  }
  .name_2{
    margin-bottom:15px;
  }
  .add_view{
    display:flex;
    flex-direction:column;
    border-left:1px solid #ccc;
  }
  .view{
    width:150px;
  }
  .active{
    color:#295eff;
    font-weight:800;
    border:1px solid #0139fd;
  }
  .containter{
    position: relative;
    width: 100%;
    background:#f0f2f5;
    margin-top:-17px;
  }
  .name_1{
    margin-top:10px;
  }
  .person{
    width: 33.3%;
    border-right: 1px solid #ccc ;
    border-bottom: 1px solid #ccc ;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  .top_title{
    border-left: 1px solid #ccc ;
    border-top: 1px solid #ccc ;
    width:100%;
    box-sizing: border-box;
    display:flex;
    flex-wrap:wrap;
    padding-left:15px;
  }
  .top_title>div{
    width:33.3%;
    border-right: 1px solid #ccc ;
    border-bottom: 1px solid #ccc ;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  .addUser{
    display: flex;
    flex-direction:column;
  }
  .add_api_seting{
    display:flex;
    flex-direction:column;
  }
  .title_name{
    margin-left:20px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size:20px;
    padding:15px;
  }
  .infos{
    width: 33.3%;
    border-right: 1px solid #ccc ;
    border-bottom: 1px solid #ccc ;
    border-left:1px solid #ccc ;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  .select{
    margin-top:17px;
    margin-bottom:17px;
    color:#bfbfbf;
    width:140px;
  }
  .pwd{
    margin-top:15px;
  }
  .success{
    width:120px;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    font-weight:500;
  }
  .reset{
    background-color:white;
    color:rgba(0, 0, 0, 0.65);
  }
</style>
