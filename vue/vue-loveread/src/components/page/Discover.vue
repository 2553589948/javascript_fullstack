<template>
  <div class="discover-wrapper">
    <!-- 头部 -->
    <v-header class="newsHeader">
      <i class="icon" slot="left-icon">&#xe623;</i>
      <span slot="content">新闻速递</span>
      <router-link to="" slot="right-icon" tag="div">
        <i class="icon">&#xe624;</i>
      </router-link>
    </v-header>
    <!-- content -->
    <v-scroll
    class="discover"
    ref="discover"
    :pullup="pullup"
    :data="result"
    :beforeScroll="beforeScroll"
    @scrollToEnd="searchMore"
    @beforeScroll="listScroll">
      <ul class="news-list">
        <li class="news-item"
        v-for="(item, index) in result" :key="index"
        @click="goNewsInfo(item.path)">
          <div class="news-content" v-if="item.title">
            <div class="info">
              <h3 class="title">{{item.title}}</h3>
              <div class="detail">
                <span class="pubTime">{{item.passtime}}</span>
              </div>
            </div>
            <div class="pic">
              <img :src="item.image" alt="">
            </div>
          </div>
        </li>
        <v-load class="load-wrapper" v-show="showLoad"></v-load>
      </ul>
    </v-scroll>
    <!-- loading -->
    <v-loading v-show="showLoading"></v-loading>
  </div>
</template>

<script>
import vheader from '@/components/vheader'
import api from '@/api'
import loading from '@/components/loading'
import load from '@/components/load'
import scroll from '@/components/scroll'

export default {
  data () {
    return {
      result: [],
      page: 1,
      showLoading: true,
      showLoad: false,
      pullup: true, // 放开下拉加载更多
      beforeScroll: true
    }
  },
  components: {
    'v-loading': loading,
    'v-load': load,
    'v-scroll': scroll,
    'v-header': vheader
  },
  methods: {
    _getNews () {
      const params = {
        page: this.page,
        count: 10
      }
      api.neteasyNews(params)
      .then((res) => {
        // console.log(res)
        if (res.code === 200) {
          this.result = [...this.result, ...res.result]
          console.log(this.result)
          this.showLoading = false
        }
      })
    },
    searchMore () {
      this.showLoad = true
      this.page++
      this._getNews()
    },
    listScroll () {},
    goNewsInfo (url) {
      window.location.href = url
    }
  },
  mounted () {
    this._getNews()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.discover-wrapper
  background-color $bg_color
  color #111
  // bgc(#f5f7f9)
  .discover
    height 100%
    overflow hidden
    position fixed
    top px2rem(88px)
    bottom px2rem(130px)
    width 100%
    .news-list
      padding-top px2rem(10px)
      bgc(#fff)
      .news-item
        .news-content
          padding px2rem(25px) px2rem(15px)
          borderbtm-1px(#f5f7f9)
          display flex
          justify-content space-between
          .pic
            flex 0 0 px2rem(280px)
            img
              display block
              height px2rem(170px)
              width 100%
          .info
            flex 1
            .title
              padding-right px2rem(15px)
              color #333333
              font-weight normal
              max-height px2rem(120px)
              line-height px2rem(60px)
              font-size 18px
              overflow hidden
              text-overflow ellipsis
              white-space normal
            .detail
              color #b4b4b4
              line-height px2rem(40px)
              height px2rem(40px)
              margin-top px2rem(20px)
              font-size 14px
              letter-spacing 0
              overflow hidden
      .load-wrapper
        height px2rem(80px)
</style>
