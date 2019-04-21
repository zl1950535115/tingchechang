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
    console.log('updataStudentListData', payload)
    state.StudentListDatas = payload.exam
  },
  updataStudentDetail(state, payload) {
    console.log('updataStudentDetail...', payload)
    state.StudentDetails = payload.exam
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
    console.log('getStudentDetail...', payload)
    const getStudentDetaily = await StudentDetail(payload)
    commit('updataStudentDetail', getStudentDetaily)
    // console.log('updataStudentDetail...', getStudentDetail)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

