<template>
  <div class="search-wrapper">
    <div class="search-header">
      <div class="search-top">
        <i class="icon">&#xe600;</i>
        <span>爱阅读</span>
      </div>
      <div class="search-box-wrap">
        <v-search-box @query="onQueryChange" ref="searchBox" :placeholder="query"></v-search-box>
      </div>
    </div>
    <!-- 热门搜索 搜索历史 -->
    <div class="searchAbout-wrapper">
      <div class="searchAbout">
        <div>
          <!-- 热门搜索 -->
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{item.word}}</span>
              </li>
            </ul>
          </div>
          <!-- 搜索历史 -->
          <div class="search-history">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="clearSearchHistory">
                <i class="icon">&#xe67a;</i>
              </span>
            </h1>
            <!-- 搜索历史列表 -->
            <v-search-list :searches="searchHistory" @select="saveSearch" @delete="deleteSearchHistory"></v-search-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import { mapGetters } from 'vuex'
import { searchMixin } from '@/common/mixin'
import searchBox from '@/components/searchBox'
import searchList from '@/components/searchList'

export default {
  data () {
    return {
      hotKey: []
    }
  },
  created () {
    this._getHotSearchKey()
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  mixins: [searchMixin], // mixins合并data()
  methods: {
    onQueryChange (e) {
      console.log(e)
    },
    // 获取搜索热词
    _getHotSearchKey () {
      api.getHotSearchKey()
      .then((res) => {
        console.log(res)
        if (res.ok === true) {
          this.hotKey = res.searchHotWords.slice(0, 10)
          console.log(this.hotKey)
        }
      })
    }
  },
  components: {
    'v-search-box': searchBox,
    'v-search-list': searchList,
    // 'v-suggest': suggest
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.search-wrapper
  width 100%
  height 100vh
  .search-header
    width 100%
    padding-bottom 80px
    @media screen and (max-width: 460px)
      padding-bottom 40px
    .search-top
      text-align center
      width 100%
      height 90px
      line-height 90px
      font-size 0
      span
        vertical-align middle
        font-size 24px
        margin-left 10px
        font-weight 600
      .icon
        font-size 40px
        vertical-align middle
    .search-box-wrap
      position relative
      width 80%
      max-width 840px
      margin 0 auto
      @media screen and (max-width: 460px)
        padding 0 20px
        width auto
  .searchAbout-wrapper
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .searchAbout
      height 100%
      overflow hidden
      .hot-key
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom px2rem(40px)
          font-size 16px
          color #e34737
        .item
          display inline-block
          padding px2rem(16px) px2rem(30px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 16px
          font-size 14px
          color #e34737
          background rgba(238, 240, 244, .1)
      .search-history
        position relative
        margin 0 px2rem(40px)
        .title
          display flex
          align-items center
          height px2rem(80px)
          font-size 16px
          color hsla(0, 0%, 100%, 0.5)
          .text
            flex 1
          .clear
            .icon
              font-size 18px
              color hsla(0, 0%, 100%, 0.5)
</style>