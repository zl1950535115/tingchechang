import { classify, examType, subject, getQuestionsType } from '@/api/addclassify'
const state = {
  data: [],
  type: [],
  sub: [],
  getQuestions: []
}

const mutations = {
  classif(state, payload) {
    for (const key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  async classify({ commit }, payload) {
    const data = await classify()
    // console.log(data.data)
    commit('classif', { data: data.data })
  },
  async examType({ commit }, payload) {
    const type = await examType()
    // console.log(type)
    commit('classif', { type: type.data })
  },
  async subject({ commit }, payload) {
    const sub = await subject()
    // console.log(sub)
    commit('classif', { sub: sub.data })
  },
  async getQuestionsType({ commit }, payload) {
    const getQuestions = await getQuestionsType()
    // console.log(getQuestions)
    commit('classif', { getQuestions: getQuestions.data })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
