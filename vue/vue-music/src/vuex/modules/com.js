import * as types from '../types' // * as引入所有抛出的方法名

const state = {
  showSidebar: false,
  searchHistory: ['123', 'abc']
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state, status) {
    state.searchHistory = status
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit, state}, query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)] // 去重
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}