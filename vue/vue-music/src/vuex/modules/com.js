import * as types from '../types' // * as引入所有抛出的方法名

const state = {
  showSidebar: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  }
}

const getters = {
  showSidebar: state => state.showSidebar
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}