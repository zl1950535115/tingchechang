import { getClassRoom } from '@/api/classroom'

const state = {

}

const mutations = {

}

const actions = {
  async getclassroom({ commit }, payload) {
    const data = await getClassRoom()
    console.log(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
