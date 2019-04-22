import { examType, subject, exam, examlist, renewal, detail, searchlist, getAll } from '@/api/exams'

const state = {
  examTypeList: [],
  subjectList: [],
  info: {},
  list: [],
  detail: [],
  allExams: []
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
    const res = await examType()
    commit('updateState', { examTypeList: res.data })
  },
  async subject({ commit }, payload) {
    const res = await subject()
    commit('updateState', { subjectList: res.data })
  },
  async exam({ commit }, payload) {
    const res = await exam(payload)
    return res
  },
  // 查询所有的数据
  async getList({ commit }, payload) {
    const res = await examlist(payload)
    commit('updateState', { list: res.exam })
    return res
  },
  // 跟新数据
  async renewal({ commit }, payload) {
    console.log(payload)
    const res = await renewal(payload.header, payload.data)
    return res
  },
  // 详情列表
  async detail({ commit }, payload) {
    const res = await detail(payload)
    console.log(res)
    commit('updateState', { detail: res.data })
  },
  async getAll({ commit }, payload) {
    const res = await getAll()
    commit('updateState', { allExams: res.data })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
