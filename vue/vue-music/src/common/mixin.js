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
      'selectPlaySong',
      'addPlayList'
    ]),
    onQueryChange (query) {
      this.query = query.trim() // trim()去空格

    },
    // 何时触发这个事件
    saveSearch (song) {
      // this.$refs.searchBox.setQuery(song)

      this.saveSearchHistory(this.query)

      this.selectPlaySong(song)
      // 为了看效果
      this.addPlayList(song)
    },
    blurInput () {
      this.$refs.searchBox.blur()
    }
  }
}

export const playerMixin = {
  computed: {
    ...mapGetters([
      'currentSong',
      'playList'
    ])
  },
  methods: {

  }
}