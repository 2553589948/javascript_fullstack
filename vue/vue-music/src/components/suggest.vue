<template>
  <v-scroll class="suggest"
  ref="suggest"
  :pullup="pullup"
  :data="result"
  :beforeScroll="beforeScroll"
  @scrollToEnd="searchMore"
  @beforeScroll="listScroll">
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in result" :key="index"
      @click="selectItem(item)">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
      <!-- loading加载图标 -->
      <loading class="loading-wrapper" v-show="hasMore"></loading>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
      <span>抱歉！暂无搜索结果！</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from '@/api'
import load from '@/components/load'
const limit = 20
export default {
  name: 'suggest',
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      page: 1,
      result: [],
      hasMore: true, // 后端给的
      pullup: true, // 放开下拉加载更多
      beforeScroll: true
    }
  },
  components: {
    'v-scroll': scroll,
    'loading': load
  },
  methods: {
    fetchResult () {
      const params = {
        limit,
        offset: this.page - 1,
        keywords: this.query
      }
      api.MusicSearch(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.result = [...this.result, ...res.result.songs] // 数组拼接(解构)
          this._checkMore(res.result)
        }
      })
    },
    // 更换搜索内容
    search () {
      this.page = 1
      this.hasMore = true
      this.$refs.suggest.scrollTo(0, 0)
      this.result = []
      this.fetchResult()
    },
    getDisplayName (item) {
      return `${item.name}-${item.artists[0] && item.artists[0].name}`
    },
    searchMore () {
      this.page++
      this.fetchResult()
    },
    listScroll () {
      this.$emit('listScroll')
    },
    _checkMore (data) {
      if (data.songs.length < 12 || ((this.page - 1) * limit) >= data.songCount) {
        this.hasMore = false
      }
    },
    selectItem (item) {
      this.$emit('select', item)
    }
  },
  watch: {
    query (newQuery) {
      if (!newQuery) {
        return
      }
      this.search(newQuery)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/function.styl"
.suggest 
  height 100%
  overflow hidden
  .suggest-list 
    padding 0 px2rem(60px)
    .suggest-item 
      display flex
      align-items center
      line-height px2rem(80px)
    .icon 
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      font-size 14px
      color hsla(0,0%,100%,.3)
    .name 
      flex 1
      font-size 14px
      color hsla(0,0%,100%,.3)
      overflow hidden
      .text 
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
    .loading-wrapper 
      height px2rem(80px)
  .no-result-wrapper 
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    text-align center
    span 
      font-size 14px
      color hsla(0,0%,100%,.3)
</style>
