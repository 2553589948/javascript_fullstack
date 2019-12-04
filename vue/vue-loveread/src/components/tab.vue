<template>
  <div class="tab">
    <router-link to="/discover" class="tab-item" tag="div">
      <div class="icon">&#xe601;</div>
      <div class="tab-link">发现</div>
    </router-link>
    <router-link to="/bookshelf" class="tab-item" tag="div">
      <div class="icon">&#xe603;</div>
      <div class="tab-link">书架</div>
    </router-link>
    <router-link to="/story" class="tab-item" tag="div">
      <div class="icon">&#xe67d;</div>
      <div class="tab-link">故事</div>
    </router-link>
    <router-link to="/mine" class="tab-item" tag="div">
      <div class="icon">&#xe607;</div>
      <div class="tab-link">我</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl'
.tab
  display flex
  position fixed
  z-index 99
  left 0
  bottom 0
  width 100%
  height px2rem(130px)
  background-color #fff
  bordertop-1px(#e3e3e3)
  font-size 14px
  color #000
  &-item
    flex 1
    text-align center
    .icon
      font-family "iconfont"!important
      font-size 24px
      font-style normal
      margin-top px2rem(15px)
    .tab-link
      margin-top px2rem(10px)
      color #000
    &.router-link-active
      .tab-link
        color #1E90FF
      .icon
        color #1E90FF
</style>
