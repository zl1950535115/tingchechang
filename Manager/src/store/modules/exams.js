import { examType, subject, exam } from '@/api/exams'

const state = {
  examTypeList: [],
  subjectList: [],
  info: {}
}

const mutations = {
  updateState(state, payload) {
    console.log(payload)
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
    console.log(res)
    commit('updateState', { subjectList: res.data })
  },
  async exam({ commit }, payload) {
    var res = await exam(payload)
    return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
