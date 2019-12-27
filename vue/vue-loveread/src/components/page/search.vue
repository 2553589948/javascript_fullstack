<template>
  <div class="search-wrapper">
    <div class="search-header">
      <div class="search-top">
        <i class="icon">&#xe600;</i>
        <span>爱阅读</span>
      </div>
      <div class="search-box-wrap">
        <v-search-box></v-search-box>
      </div>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'

export default {
  data () {
    return {
    }
  },
  components: {
    'v-search-box': searchBox,
    // 'v-scroll': scroll,
    // 'v-search-list': searchList,
    // 'v-suggest': suggest
  }
}
</script>

<style lang="stylus" scoped>
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
</style>