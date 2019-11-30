<template>
  <div class="banner" v-show="showBanner">
    <van-swipe :loop="false" @change="onChange">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <div
          class="banner-img"
          :style="`background-image: url(${item.img})`"
        ></div>
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.content }}</div>
      </van-swipe-item>
    </van-swipe>
    <div class="jump-over" @click="mineLogin">{{ countdown }} 跳过</div>
    <div class="tips">你也可以滑动跳过哦</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBanner: true,
      countdown: 5,
      bannerList: [
        {
          img: require("../assets/images/raw_1512446076.jpeg"),// 请求本地静态资源
          title: "半亩方田",
          content: "足以记录最美好的时光"
        },
        {
          img: require("../assets/images/raw_1512446089.jpeg"),
          title: "一指流沙",
          content: "足以消散所有的烦恼"
        },
        {
          img: require("../assets/images/raw_1512446063.jpeg"),
          title: "一支画笔",
          content: "足以描绘最好的自己"
        },
        {
          img: require("../assets/images/raw_1512446113.jpeg"),
          title: "一辆小车",
          content: "足以翱翔于知识的海洋"
        }
      ]
    }
  },
  methods: {
    onChange (idx) {
      // console.log(idx)
      if (idx === 3) {
        let t = setTimeout(() => {
          this.mineLogin()
          clearTimeout(t)
        }, 500)
      }
    },
    mineLogin () {
      this.showBanner = false
    }
  },
  mounted () {
    let timer = setInterval(() => {
      this.countdown--
      if (this.countdown <= 0) {
        this.mineLogin()
        clearInterval(timer)
      }
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl'
  .banner
    position fixed
    top 0
    left 0
    z-index 100
    .van-swipe
      width 100vw
      height 100vh
      background rgba(9, 30, 46, 1)
      .banner-img
        position absolute
        left 50%
        top px2rem(268px)
        transform translateX(-50%)
        width px2rem(420px)
        height px2rem(420px)
        border-radius 50%
        background-position center
        background-repeat no-repeat
        background-size 100% 100%
      .title
        position absolute
        top px2rem(808px)
        font-size 24px
        left 50%
        transform translateX(-50%)
      .desc
        position absolute
        top px2rem(892px)
        left 50%
        transform translateX(-50%)
        font-size 14px
        opacity 0.7
    .tips
      position fixed
      left 50%
      transform translateX(-50%)
      top px2rem(1156px)
      width px2rem(416px)
      height px2rem(100px)
      line-height px2rem(100px)
      text-align center
      color #1989fa
      opacity 0.85
      font-size 16px
    .jump-over
      position fixed
      top 3%
      right 3%
      width px2rem(160px)
      height px2rem(60px)
      line-height px2rem(60px)
      text-align center
      border-radius 12px
      background-color rgba(155, 163, 181, 1)
      color rgba(255, 255, 255, 1)
      opacity 0.85
      font-size 16px
</style>
