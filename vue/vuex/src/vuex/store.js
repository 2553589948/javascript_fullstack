import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { //数据源
  count: 1
}

const mutations = { //mutations相当于methods
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const getters = { //getters相当于computed
  getcount: (state) => {
    return state.count + 100
  }
}

const actions = { //用来调用mutations里的方法,把同步变成异步
  addActions (context) {//context指仓库队列上下文
    context.commit('add', 10)
  },
  reduceActions ({commit}) {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})