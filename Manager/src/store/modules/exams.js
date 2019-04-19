import { examType, subject, exam, examlist, renewal, detail, searchlist } from '@/api/exams'

const state = {
  examTypeList: [],
  subjectList: [],
  info: {},
  list: [],
  detail: []
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
  // 查询所有的数据
  async getList({ commit }, payload) {
    var res = await examlist(payload)
    commit('updateState', { list: res.exam })
    return res
  },
  // 跟新数据
  async renewal({ commit }, payload) {
    console.log(payload)
    var res = await renewal(payload.header, payload.data)
    return res
  },
  // 详情列表
  async detail({ commit }, payload) {
    var res = await detail(payload)
    console.log(res)
    commit('updateState', { detail: res.data })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
