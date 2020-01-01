<template>
  <div class="sidebar" :class="{showbar: showSidebar}">
    <div class="sidebar-con" :class="{showbar: showSidebar}">
      <div class="head">
        <div class="avatar">
          <img src="../assets/images/raw_1512446063.jpeg" alt="">
        </div>
        <div class="name">kyle</div>
      </div>
      <div class="menu">
        <ul>
          <li @click="_hidebar" v-for="(item, index) in menuLists" :key="index">
            <!-- 如需去往不同页面:to="`${item.id}`" -->
            <router-link to="/aboutme">
              <i class="icon" :class="item.id"></i>
              <span>{{item.text}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="sidebar-mask" v-show="showSidebar" @click="_hidebar"></div>
  </div>
</template>

<script>
export default {
  props: {
    showSidebar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menuLists: [
        {
          type: 0,
          id: 'aboutMe',
          text: '关于我'
        },
        {
          type: 1,
          id: 'changeSkin',
          text: '换肤'
        },
        {
          type: 2,
          id: 'setting',
          text: '设置'
        },
        {
          type: 3,
          id: 'loveread',
          text: '关于爱阅读'
        },
        {
          type: 4,
          id: 'help',
          text: '帮助'
        },
        {
          type: 5,
          id: 'suggest',
          text: '反馈'
        }
      ]
    }
  },
  methods: {
    _hidebar () {
      this.$emit('hidebar')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.sidebar 
  color #e8e8e8
  .sidebar-con 
    background rgba(0, 0, 0, 1)
    position fixed
    top 0
    left px2rem(-400px)
    transform translateZ(0)
    opacity 0
    width px2rem(350px)
    z-index 2020
    height 100%
    overflow auto
    transition all 0.3s ease
    &.showbar 
      transform translateX(px2rem(400px))
      opacity 1
    .head 
      text-align center
      .avatar 
        width px2rem(90px)
        height px2rem(90px)
        background #f1f1f1
        margin px2rem(60px) auto px2rem(15px)
        img 
          width 100%
          height 100%
          border-radius 50%
      .name 
        font-size px2rem(32px)
    .menu 
      margin-top px2rem(30px)
      ul 
        li 
          height px2rem(90px)
          line-height px2rem(90px)
          a 
            display block
            padding-left px2rem(60px)
            .icon 
              font-size px2rem(36px)
              vertical-align middle
              color #fff
              &.aboutMe::before
                content "\e607"
              &.changeSkin::before
                content "\e78e"
              &.setting::before
                content "\e632"
              &.loveread::before
                content "\e600"
              &.help::before
                content "\e60b"
              &.suggest::before
                content "\e60a"
            span 
              vertical-align middle
              font-size px2rem(36px)
              padding-left px2rem(20px)
              color #b2b4b8
  .sidebar-mask 
    position fixed
    width 100%
    margin 0 auto
    top 0
    left 0
    bottom 0
    right 0
    z-index 2019
    background rgba(0, 0, 0, 0.3)
</style>
