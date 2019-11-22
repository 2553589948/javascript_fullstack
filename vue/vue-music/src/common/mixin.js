import {mapActions} from 'vuex'

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
      'clearSearchHistory'
    ]),
    onQueryChange (query) {
      this.query = query.trim() // trim()去空格

    },
    // 何时触发这个事件
    saveSearch (song) {
      this.$refs.searchBox.setQuery(song)

      this.saveSearchHistory(this.query)
    },
    blurInput () {
      this.$refs.searchBox.blur()
    }
  }
}