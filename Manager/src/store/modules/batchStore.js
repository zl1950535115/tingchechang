import { classList, StudentList, StudentDetail, bathchSucceed } from '@/api/batch.js'
const state = {
  classLists: [],
  StudentListDatas: [],
  StudentDetails: {}
}

const mutations = {
  updataclassList(state, payload) {
    state.classLists = payload.data
  },
  updataStudentListData(state, payload) {
    if (payload) {
      state.StudentListDatas = payload.exam
    } else {
      state.StudentListDatas = []
    }
  },
  updataStudentDetail(state, payload) {
    console.log('updataStudentDetail', payload)
    if (payload) {
      state.StudentDetails = payload.data
    } else {
      state.StudentDetails = []
    }
  }
}

const actions = {
  async getClassList({ commit }, payload) {
    const getClassListy = await classList()
    commit('updataclassList', getClassListy)
  },
  async getStudentListData({ commit }, payload) {
    const getStudentListDatay = await StudentList(payload)
    commit('updataStudentListData', getStudentListDatay)
  },
  async getStudentDetail({ commit }, payload) {
    console.log('getStudentDetail', payload)
    const getStudentDetaily = await StudentDetail(payload)
    commit('updataStudentDetail', getStudentDetaily)
  },
  async getbathchSucceed({ commit }, payload) {
    return await bathchSucceed(payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

