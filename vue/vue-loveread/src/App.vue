<template>
  <div id="app">
    <div class="search-top">
      <i class="iconfont">&#xe600;</i>
      <span>微信读书</span>
    </div>
    <div class="search-box">
      <input type="text" class="search-input" placeholder="请输入你要搜索的关键词" />
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@font-face {
  font-family 'iconfont'  /* project id 1519920 */
  src url('//at.alicdn.com/t/font_1519920_qxkhfgkqgs.eot')
  src url('//at.alicdn.com/t/font_1519920_qxkhfgkqgs.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1519920_qxkhfgkqgs.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1519920_qxkhfgkqgs.woff') format('woff'),
  url('//at.alicdn.com/t/font_1519920_qxkhfgkqgs.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1519920_qxkhfgkqgs.svg#iconfont') format('svg')
}
.iconfont
  font-family "iconfont" !important
  font-size 40px
  font-style normal
  vertical-align middle
  // color #ffffff
html,body
  // line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  // user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  min-height 100vh
  // color #fff
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
