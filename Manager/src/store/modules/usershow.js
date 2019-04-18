import {Userlist,userData,userapi,apilist,person_or_server,ViewPerson,View_serverPerson} from "@/api/usershow"

const state={
  username:'', //第一个表格的数据列表
  userperson:'', //身份数据
  apilist:'', // api列表
  Viewlist:'', // 视图权限列表接口
  view_person_list:'' // 用户与权限的关系列表
}
const actions={
  userlist({commit},payload){   //获取第一个表格的数据
    return new Promise((res,rej)=>{
      Userlist().then((result)=>{
        state.username=result.data
        res()
      })
    })
},
userData({commit},payload){
  return new Promise((res,rej)=>{
    userData().then((result)=>{
      state.userperson=result.data
    })
  })
},
userapi(){
 return new Promise((res,rej)=>{
  userapi().then((result)=>{
      state.apilist=result.data
  })
 })
},
personorserver(){
  return new Promise((res,rej)=>{
    person_or_server().then((result)=>{
    })
  })
},
ViewPerson(){
  return new Promise((res,rej)=>{
    ViewPerson().then((result)=>{
     state.Viewlist=result.data
    })
  })
  },
View_serverPerson(){
  return new Promise((res,rej)=>{
    View_serverPerson().then((result)=>{
    state.view_person_list=result.data
    })
  })
  }
}

export default {
  namespaced:true,
  state,
  actions
}
