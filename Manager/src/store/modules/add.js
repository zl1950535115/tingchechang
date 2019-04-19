import { classify, examType, subject, getQuestionsType, questions, userIfo, condition, questionsnew } from '@/api/addclassify'
const state = {
  data: [],
  type: [],
  sub: [],
  getQuestions: [],
  user: [],
  cond: [],
  newquesition: []
}

const mutations = {
  classif(state, payload) {
    for (const key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  // 获取所有的试题类型
  async classify({ commit }, payload) {
    const data = await classify()
    console.log(data.data)
    commit('classif', { data: data.data })
  },
  // 所有考试类型
  async examType({ commit }, payload) {
    const type = await examType()
    console.log(type)
    commit('classif', { type: type.data })
  },
  // 获取所有的课程
  async subject({ commit }, payload) {
    const sub = await subject()
    console.log(sub)
    commit('classif', { sub: sub.data })
  },
  // 获取所有的试题类型
  async getQuestionsType({ commit }, payload) {
    const getQuestions = await getQuestionsType()
    console.log(getQuestions)
    commit('classif', { getQuestions: getQuestions.data })
  },
  // 获取用户信息
  async userIfo({ commit }, payload) {
    const user = await userIfo()
    console.log('uuu...', user)
    commit('classif', { user: user.data })
  },
  // 添加用户接口
  async questions({ commit }, payload) {
    const addquest = await questions(payload)
    console.log('aaa...', addquest)
  },
  // 查询接口
  async condition({ commit }, payload) {
    const cond = await condition(payload)
    console.log(cond)
    commit('classif', { cond: cond.data })
  },
  // 全部试题
  async questionsnew({ commit }, payload) {
    const newquesition = await questionsnew()
    console.log(newquesition)
    commit('classif', { newquesition: newquesition.data })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
