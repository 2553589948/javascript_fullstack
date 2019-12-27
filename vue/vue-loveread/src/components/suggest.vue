<template>
  <div class="suggest"
  ref="suggest">
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in result" :key="index"
      @click="selectItem(item.title, item._id)">
        <div class="name">
          <p class="text">{{item.author}}--{{item.title}}</p>
        </div>
      </li>
      <!-- loading加载图标 -->
      <loading class="loading-wrapper" v-show="loading"></loading>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length">
      <span>抱歉！暂无搜索结果！</span>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import load from '@/components/load'

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
      result: [],
      loading: false
    }
  },
  components: {
    'loading': load
  },
  methods: {
    _novelSearch () {
      const params = {
        query: this.query
      }
      api.novelSearch(params)
      .then(res => {
        console.log(res)
        if (res.ok === true) {
          // this.result = res.keywords // 模糊搜索
          this.result = res.books
          this.loading = false
        }
      })
    },
    // 更换搜索内容
    search () {
      this.loading = true
      this.result = []
      this._novelSearch()
    },
    selectItem (item, bookId) {
      this.$emit('select', item)
      this.$router.push({path: '/reader', query: {'bookId': bookId}})
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
