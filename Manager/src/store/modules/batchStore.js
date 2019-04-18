import { classList, StudentList, StudentDetail } from '@/api/batch.js'
const state = {
  classLists: [],
  StudentListDatas: [],
  StudentDetails: [],
  gradeId: 0,
  student_id: 0
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
    console.log('updataStudentDetail...', payload)
    // state.StudentDetails = payload.exam
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
    const getStudentDetaily = await StudentDetail(payload)
    commit('updataStudentDetail', getStudentDetaily)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

