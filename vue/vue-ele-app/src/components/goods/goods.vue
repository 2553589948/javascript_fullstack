<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="menu-item" @click="selectMenu(index)" :class="{'current': currentIndex === index}">
            <span class="text border-1px">
              <span v-if="item.type > 0" class="icon" :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper"></div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Goods',
  data () {
    return {
      goods: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      currentIndex: 0
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/goods.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          this.goods = res.data.data
          this.$nextTick(() => { /* $nextTick()vue自带的方法能保证html渲染完成后才执行 */
            this._initScroll()
          })
        }
      })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
    },
    selectMenu (idx) {
      console.log(idx)
      this.currentIndex = idx
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100px
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      width 56px
      height 54px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 9
        margin-top -1px
        background #fff
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
      .text
        display table-cell
        width 56px
        vertical-align middle
        border-1px(rgba(7, 17, 27, 0.1))
        font-size 12px
</style>
