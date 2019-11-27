<template>
  <div class="header">
    <div class="search-top">
      <i class="icon">&#xe600;</i>
      <span>微信读书</span>
    </div>
    <div class="search-box">
      <input type="text" class="search-input" placeholder="请输入你要搜索的关键词" />
    </div>
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
.icon
  font-family "iconfont" !important
  font-size 40px
  font-style normal
  vertical-align middle
  // color #ffffff
html, body
  // line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  // user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  // min-height 100vh
  color #fff
.search-top
  text-align center
  height 90px
  line-height 90px
  font-size 0
  span
    vertical-align middle
    font-size 24px
    margin-left 10px
.search-box
  margin 0 20px
  .search-input
    height 30px
    line-height 30px
    border 1px solid rgba(34,43,95,.79)
    background rgba(21,24,68,.5)
    display inline-block
    width 100%
    color #fff
    box-sizing border-box
    border-radius 40px
    text-align center
    font-size 14px!important
    // transition all .4s
    &:focus
      outline none
</style>
