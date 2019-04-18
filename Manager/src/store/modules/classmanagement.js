import { getGrade, getRoom, setRoom, deleteRoom, getStudent } from '@/api/classroom'

const state = {
  // 全部班级
  grade: null,
  // 全部教室
  room: null,
  // 教室id
  roomid: null,
  studentlist: null
}

const mutations = {
  updataState(state, payload) {
    for (const key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  // 获取班级信息
  async getgrade({ commit }, payload) {
    // console.log(payload)
    const data = await getGrade(payload)
    commit('updataState', { grade: data.data })
  },

  // 获取教室信息
  async getroom({ commit }, payload) {
    const data = await getRoom()
    commit('updataState', { room: data.data })
    console.log(data)
  },

  // 添加教室
  async setroom({ commit }, payload) {
    // console.log('666....', payload)
    const data = await setRoom(payload)
    commit('updataState', { roomid: data.room_id })
  },

  // 删除教室
  async deleteroom({ commit }, payload) {
    await deleteRoom(payload)
  },

  // 获取分班学生信息
  async getstudent({ commit }, payload) {
    const data = await getStudent()
    commit('updataState', { studentlist: data.data })
    console.log(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
