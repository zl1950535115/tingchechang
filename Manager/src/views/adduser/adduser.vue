<template>
  <div class="containter">
    <titleinfo :title="Title_info" />
    <div class="top_title">
      <div class="infos">
        <el-button v-for="(item,index) in addList" :key="index" plain :class="index==ind?'active':''" @click="tab(index)">{{ item }}</el-button>
        <div v-if="ind==0" class="addUser">
          <el-input v-model="name" class="name_1" placeholder="请输入用户名" clearable />
          <el-input v-model="pwd" class="pwd" placeholder="请输入密码" show-password />

          <el-select slot="prepend" v-model="select" class="select" placeholder="请选择身份id">
            <el-option v-for="(item,index) in userData" :key="index" :label="item.identity_text" :value="index" />
          </el-select>
          <div class="confim"><el-button type="primary" class="success" @click="adduser">确定</el-button><el-button class="reset" plain>重置</el-button></div>
        </div>

        <div v-if="ind==1" class="addUser">
          <el-select slot="prepend" v-model="userselect" class="select" placeholder="请选择身份ID">
            <el-option v-for="(item,index) in usernamelist" :key="index" :label="item.user_name" :value="index" />
          </el-select>

          <el-input v-model="new_name" class="new_name" placeholder="请输入用户名" clearable />
          <el-input v-model="new_pwd" class="pwd" placeholder="请输入密码" show-password />

          <el-select slot="prepend" v-model="manger" class="select" placeholder="请选择他/她的身份">
            <el-option v-for="(item,index) in userData" :key="index" :label="item.identity_text" :value="index" />
          </el-select>
          <div class="confim"><el-button type="primary" class="success" @click="stateuser">确定</el-button><el-button class="reset" plain>重置</el-button></div>
        </div>

      </div>
      <div class="person">
        <el-button class="active add_person">添加身份</el-button>
        <el-input v-model="person" clearable class="name_2" placeholder="请输入身份" />
        <div class="confim"><el-button type="primary" class="success" @click="adduserperson">确定</el-button><el-button class="reset" plain>重置</el-button></div>
      </div>
      <div class="add_api">
        <el-button class="active add_person">添加api接口权限</el-button>
        <el-input v-model="api_name" class="name_2" placeholder="请输入api接口权限名称" clearable />
        <el-input v-model="api_url" class="name_2" placeholder="请输入api接口权限url" clearable />
        <el-input v-model="api_fun" class="name_2" placeholder="请输入api接口权限方法" clearable />
        <div class="confim"><el-button type="primary" class="success" @click="apiadd">确定</el-button><el-button class="reset" plain>重置</el-button></div>
      </div>

      <div class="add_view">
        <el-button class="active view">添加视图接口权限</el-button>
        <el-select slot="prepend" v-model="view_select" class="select" placeholder="请输入已有视图">
          <el-option label="餐厅名" value="1" />
          <el-option label="订单号" value="2" />
          <el-option label="用户电话" value="3" />
        </el-select>
        <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
      </div>
      <div class="add_api_seting">
        <el-button class="active apibtn">给身份设置api接口权限</el-button>
        <el-select v-model="user_add_api" class="select" placeholder="请选择身份id">
          <el-option label="餐厅名" value="1" />
          <el-option label="订单号" value="2" />
          <el-option label="用户电话" value="3" />
        </el-select>
        <el-select v-model="user_add_manger" class="select" placeholder="请选择api接口权限">
          <el-option label="餐厅名" value="1" />
          <el-option label="订单号" value="2" />
          <el-option label="用户电话" value="3" />
        </el-select>
        <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
      </div>

      <div class="add_api_seting">
        <el-button class="active view_api">给身份设置视图权限</el-button>
        <el-select v-model="user_view_manger" class="select" placeholder="请选择身份id">
          <el-option label="餐厅名" value="1" />
          <el-option label="订单号" value="2" />
          <el-option label="用户电话" value="3" />
        </el-select>
        <el-select v-model="user_view_id" class="select" placeholder="请选择视图权限id">
          <el-option label="餐厅名" value="1" />
          <el-option label="订单号" value="2" />
          <el-option label="用户电话" value="3" />
        </el-select>
        <div class="confim"><el-button type="primary" class="success">确定</el-button><el-button class="reset" plain>重置</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
import titles from '../../components/Title_info/Title.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    titleinfo: titles
  },
  data() {
    return {
      Title_info: '添加用户',
      addList: ['添加用户', '更新用户'],
      select: '', // 用于添加用户的下拉框下标
      addUserValue: null, // 根据下标处理添加用户
      name: '', // 添加用户名
      pwd: '', // 添加密码
      ind: 0, // tab切换下标
      userselect: '', // 更新用户身份id的下拉框值下标
      manger: '', // 更新用户的身份
      new_name: '', // 更新用户的用户名
      new_pwd: '', // 更新用户的密码
      person: '', // 添加身份的输入框值
      api_name: '', // 添加api接口权限名称值
      api_url: '', // 添加api接口权限url的值
      api_fun: '', // 添加api接口权限方法的值
      view_select: '', // 添加视图接口权限下标值
      user_add_api: '', // 添加用户身份id的下拉框下标
      user_add_manger: '', // 添加api接口权限的下拉框下标
      user_view_manger: '', // 试图全线给身份id下拉框下标
      user_view_id: '', // 用户视图权限id
      list: ['我的', '你的', '他的']
    }
  },
  computed: {
    ...mapState({
      userData: state => state.adduser.user_Data,
      code: state => state.adduser.code,
      usernamelist: state => state.adduser.username,
      UserCode: state => state.adduser.userCode,
      adduserCode: state => state.adduser.adduserCode,
      apicode: state => state.adduser.addapiCode
    })
  },
  created() {
    this.userdata() // 获取身份数据
    this.username() // 获取身份名称name
  },
  methods: {
    ...mapActions({
      userdata: 'adduser/userdata',
      addusers: 'adduser/adduser',
      username: 'adduser/username',
      updateusername: 'adduser/updateusername',
      addusercrad: 'adduser/addusercard',
      addapi: 'adduser/addapi'
    }),
    tab(index) {
      this.ind = index
    },
    adduser() { // 添加用户的逻辑
      var uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      var Reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
      var blone = Reg.test(this.pwd)
      var userblone = uPattern.test(this.name)
      this.addUserValue = this.list[this.select]
      if (this.name === '' || this.addUserValue == null || this.pwd === '') {
        this.$message.error('请检查未填写值')
      } else if (blone === false) {
        this.$message.error('密码格式不正确')
        return false
      } else if (userblone === false) {
        this.$message.error('用户名格式不正确')
        return false
      } else {
        this.addusers({ user_name: this.name, user_pwd: this.pwd, identity_id: this.addUserValue }).then(() => {
          if (this.code === 1) {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.name = ''
            this.pwd = ''
            this.addUserValue = null
          }
        })
      }
    },
    stateuser() {
      if (this.new_name === '' || this.usernamelist[this.userselect].user_id === '' || this.new_pwd === '' || this.userid === '') {
        this.$message.error('请检查未填写值')
      } else {
        this.updateusername({ user_id: this.usernamelist[this.userselect].user_id, user_name: this.new_name, user_pwd: this.new_pwd, identity_id: this.userData[this.manger].identity_id })
          .then(() => {
            if (this.UserCode === 1) {
              this.$message({
                message: '恭喜你，添加成功',
                type: 'success'
              })
              this.new_name = ''
              this.new_pwd = ''
            }
          }).catch((err) => {
            console.log('错误', err)
          })
      }
    },
    adduserperson() {
      if (this.person.trim() === '') {
        this.$message.error('请检查未填写值')
      } else {
        this.addusercrad({ identity_text: this.person }).then(() => {
          if (this.adduserCode === 1) {
            this.$message({ message: '恭喜你，添加成功', type: 'success' })
          } else {
            this.$message.error('该身份已存在')
          }
        })
        this.person = ''
      }
    },
    apiadd() {
      if (this.api_name === '' || this.api_url === '' || this.api_fun === '') {
        this.$message.error('不可以为空')
      } else {
        this.addapi({ api_authority_text: this.api_name, api_authority_url: this.api_url, api_authority_method: this.api_fun }).then(() => {
          if (this.apicode === 1) {
            this.$message({ message: '恭喜你，添加成功', type: 'success' })
          } else {
            this.$message.error('该权限已存在')
          }
        })
      }
    }
  }
}
</script>

<style>
  .apibtn {
    width: 180px;
    text-align: center;
  }

  .view_api {
    width: 160px;
  }
  .add_person{
    margin-bottom:10px;
  }

  .name_2 {
    margin-bottom: 15px;
  }

  .add_view {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #ccc;
  }

  .view {
    width: 150px;
  }

  .active {
    color: #295eff;
    font-weight: 800;
    border: 1px solid #0139fd;
  }

  .containter {
    position: relative;
    width: 100%;
    background: #f0f2f5;
    margin-top: -17px;
  }

  .name_1 {
    margin-top: 10px;
  }

  .person {
    width: 33.3%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

  .top_title {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding-left: 15px;
  }

  .top_title>div {
    width: 33.3%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

  .addUser {
    display: flex;
    flex-direction: column;
  }

  .add_api_seting {
    display: flex;
    flex-direction: column;
  }
  .infos{
    width: 33.3%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

  .select {
    margin-top: 17px;
    margin-bottom: 17px;
    color: #bfbfbf;
    width: 140px;
  }

  .pwd {
    margin-top: 15px;
  }

  .success {
    width: 120px;
    background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
    font-weight: 500;
  }

  .reset {
    background-color: white;
    color: rgba(0, 0, 0, 0.65);
  }
</style>
