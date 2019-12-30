<template>
  <div class="search-box">
    <i class="icon icon-search">&#xe61f;</i>
    <input type="text" class="search-input" ref="query" v-model="query" :placeholder="usedQuery ? usedQuery : placeholder" />
    <i class="icon icon-dismiss" v-show="query || usedQuery" @click="clear">&#xe60d;</i>
  </div>
</template>

<script>
import { debounce } from '@/common/util'
export default {
  props: {
    usedQuery: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  created () {
    this.$watch('query', debounce((newQuery) => { // newQuery输入框实时内容
      this.$emit('query', newQuery)
    }, 300))
  },
  methods: {
    // blur () {
    //   this.$refs.query.blur() // input自带的方法blur()失去焦点
    // },
    // focus () {
    //   document.getElementById("searchVal").value = this.usedQuery
    // },
    clear () {
      this.query = ''
    }
    // setQuery (query) {
    //   this.query = query
    // }
  }
}
</script>

<style lang='stylus' scoped>
.search-box 
  .icon-search
    position absolute
    display block
    top 18px
    left 32px
    @media screen and (max-width: 460px)
      top 6px
  .icon-dismiss
    position absolute
    display block
    top 18px
    right 32px
    @media screen and (max-width: 460px)
      top 6px
  .search-input
    height 50px
    line-height 50px
    padding 0 52px
    @media screen and (max-width: 460px)
      height 30px
      line-height 30px
      padding 0 34px
      font-size 14px
    background rgba(238, 240, 244, .1)
    display inline-block
    width 100%
    color #fff
    box-sizing border-box
    border-radius 40px
    text-align left
    font-size 16px
    &:focus
      outline none
</style>
