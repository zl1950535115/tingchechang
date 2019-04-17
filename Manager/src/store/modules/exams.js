import { getExamsList } from '@/api/exams'

const state = {

}

const mutations = {
  updateState(payload) {
    for (let key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  async getExamsList({ commit }, payload) {
    let res = await getExamsList()
    console.log(res)
    commit('updateState', { examsList: res.data })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
