import { addUser, userData, userName, updateusername, addUserCard, addApi } from '@/api/adduser'
const state = {
  user_Data: '', // 用户身份名称
  code: '', // 接口返回的code码
  username: '', // 用户名称数据用于更新用户
  userCode: '', // 更新用户的code码
  adduserCode: '', // 添加身份的code码
  addapiCode: '' // 添加api接口code码
}
const actions = {
  userdata({ commit }) {
    return new Promise((res, rej) => {
      userData().then(result => {
        state.user_Data = result.data
        if (result) {
          res()
        }
      })
    })
  },
  adduser({ commit }, payload) {
    return new Promise((res, rej) => {
      addUser(payload).then((results) => {
        state.code = results.code
        res()
      })
    })
  },
  username({ commit }, payload) {
    return new Promise((res, rej) => {
      userName(payload).then((results) => {
        if (results.code === 1) {
          state.username = results.data
          res()
        }
      })
    })
  },
  updateusername({ commit }, payload) {
    return new Promise((res, rej) => {
      updateusername(payload).then((results) => {
        if (results.code === 1) {
          state.userCode = results.code
          res()
        } else {
          rej()
        }
      })
    })
  },
  addusercard({ commit }, payload) {
    return new Promise((res, rej) => {
      addUserCard(payload).then((result) => {
        if (result) {
          state.adduserCode = result.code
          res()
        } else {
          state.adduserCode = 0
          res()
        }
      })
    })
  },
  addapi({ commit }, payload) {
    return new Promise((res, rej) => {
      addApi(payload).then((result) => {
        if (result) {
          state.addapiCode = result.code
          res()
        } else {
          state.addapiCode = 0
          res()
        }
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions
}
