import { examType, subject, exam, del, examlist, renewal } from '@/api/exams'

const state = {
  examTypeList: [],
  subjectList: [],
  info: {},
  list: []
}

const mutations = {
  updateState(state, payload) {
    for (var key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  async examType({ commit }, payload) {
    var res = await examType()
    commit('updateState', { examTypeList: res.data })
  },
  async subject({ commit }, payload) {
    var res = await subject()
    commit('updateState', { subjectList: res.data })
  },
  async exam({ commit }, payload) {
    var res = await exam(payload)
    return res
  },
  // async del() {
  //   var res = await del()
  //   console.log(res)
  // },
  // 查询所有的数据
  async getList({ commit }, payload) {
    var res = await examlist()
    commit('updateState', { list: res.exam })
    console.log(res)
    return res
  },
  // 跟新数据
  async renewal({ commit }, payload) {
    console.log(payload)
    var res = await renewal(payload.header, payload.data)
    return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
