import {mapActions, mapGetters} from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory',
    ]),
    onQueryChange (query) {
      this.query = query.trim() // trim()去空格
    },
    // 何时触发这个事件
    saveSearch (item) {
      this.query = item
      this.saveSearchHistory(this.query)
    }
  }
}
