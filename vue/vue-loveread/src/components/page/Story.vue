<template>
  <div class="story-wrapper">
    <div class="novels-header">
      <div class="search-top">
        <i class="icon">&#xe600;</i>
        <span>爱阅读</span>
      </div>
      <div class="search-box">
        <input type="text" class="search-input" placeholder="请输入你要搜索的关键词" />
      </div>
    </div>
    <div class="novels-container"></div>
  </div>
</template>

<script>
import api from '@/api'

// const rows = 20
export default {
  data () {
    return {
      result: [],
      page: 1,
      // display: true,
      // listenScroll: true,
      // beforeScroll: true,
      // show: true
    }
  },
  methods: {
    _getNovels () {
      const params = {
        key: '991792145f62460bac35b1c92ee50cdb'
      }
      api.getNovel(params)
      .then((res) => {
        console.log(res)
      })
    }
  },
  mounted () {
    // this._getNovels()
  }
}
</script>

<style lang="stylus" scoped>
.story-wrapper
  font-family PingFang SC, sans-serif, STHeitiSC-Light, Helvetica-Light, arial
  background rgba(8, 5, 58, 0.9)
  color #fff
  .novels-header
    width 100%
    padding-bottom 80px
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
        font-family "iconfont" !important
        font-size 40px
        font-style normal
        vertical-align middle
    .search-box
      position relative
      width 80%
      max-width 840px
      margin 0 auto
      @media screen and (max-width: 460px)
        padding 0 20px
        width auto
      .search-input
        height 50px
        line-height 50px
        padding 0 52px
        @media screen and (max-width: 460px)
          height 30px
          line-height 30px
          padding 0 34px
        border 1px solid rgba(34,43,95,.79)
        background rgba(21,24,68,.5)
        display inline-block
        width 100%
        color #fff
        box-sizing border-box
        border-radius 40px
        text-align center
        font-size 14px
        &:focus
          outline none
  .novels-container
    max-width 1332px
    margin 0 auto
</style>
