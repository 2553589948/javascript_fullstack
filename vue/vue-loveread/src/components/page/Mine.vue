<template>
  <div id="mine" class="defThemeColor" ref="mine">
    <!-- 头部 -->
    <v-header class="mineHeader">
      <i class="icon" slot="left-icon">&#xe608;</i>
      <div slot="content">
        <el-dropdown class="colorBtn" trigger="click" @command="changeColor" disabled="true">
          <span class="el-dropdown-link">换肤</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">天空蓝</el-dropdown-item>
            <el-dropdown-item command="b">热力橙</el-dropdown-item>
            <el-dropdown-item command="c">幻夜黑</el-dropdown-item>
            <el-dropdown-item command="d">梦幻紫</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <router-link to="" slot="right-icon">
        <i class="icon">&#xe632;</i>
      </router-link>
    </v-header>
    <!-- content -->
    <div class="mine-content">
      <div class="login">
        <div class="login-avatar">
          <img src="../../assets/images/raw_1512446063.jpeg" alt="" />
        </div>
        <h2 class="login-username">游客</h2>
        <div class="login-btn" @click="login">
          <span class="text">点击登录</span>
          <i class="icon">&#xe606;</i>
        </div>
      </div>
      <div class="options">
        <div class="option1 mb">
          <div class="option-list">
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe602;</i>
                <span class="name">账户</span>
              </div>
              <div class="item-right">
                <div class="desc">0.00</div>
                <div class="descInfo">已购0本书</div>
              </div>
            </div>
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe609;</i>
                <span class="name">无限卡</span>
              </div>
              <div class="item-right">
                <div class="desc">9元/月</div>
                <div class="descInfo">预计可为你节省103.15元</div>
              </div>
            </div>
          </div>
        </div>
        <div class="option2 mb">
          <div class="option-list">
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe649;</i>
                <span class="name">读书排行榜</span>
              </div>
              <div class="item-right">
                <div class="descInfo">本周尚未开始阅读</div>
              </div>
            </div>
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe6b5;</i>
                <span class="name">关注</span>
              </div>
              <div class="item-right">
                <div class="desc">0人关注我</div>
              </div>
            </div>
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe625;</i>
                <span class="name">读书小队</span>
              </div>
              <div class="item-right">
                <div class="desc">3人成队</div>
                <div class="descInfo">共攒积分得大奖</div>
              </div>
            </div>
          </div>
        </div>
        <div class="option3 mb">
          <div class="option-list">
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe73e;</i>
                <span class="name">瓜分一百万天无限卡</span>
              </div>
              <div class="item-right">
                <div class="desc">挑战12道题</div>
              </div>
            </div>
          </div>
        </div>
        <div class="option4 mb">
          <div class="option-list">
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe683;</i>
                <span class="name">阅读记录</span>
              </div>
            </div>
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe634;</i>
                <span class="name">笔记</span>
              </div>
            </div>
            <div class="option-item">
              <div class="item-left">
                <i class="icon">&#xe63c;</i>
                <span class="name">书单</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vheader from '@/components/vheader'
export default {
  data () {
    return {
    }
  },
  components: {
    'v-header': vheader
  },
  methods: {
    changeColor (command) {
      // console.log(command)
      document.getElementById('mine').className ='theme' + command
    },
    login () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
@import '../../assets/css/themeColor.styl'
.mine-content
  width 100%
  margin-bottom px2rem(130px)
  padding-bottom px2rem(20px)
  color #111
  .login
    text-align center
    margin-bottom px2rem(20px)
    background #fff
    &-avatar
      width px2rem(220px)
      height px2rem(220px)
      margin 0 auto
      padding px2rem(20px) 0 px2rem(40px)
      img
        border-radius 50%
        width 100%
        height 100%
    &-username
      font-size 22px
      font-weight 600
    &-btn
      font-size 0
      padding px2rem(40px) 0
      .text
        font-size 14px
        color #3e3e3e
        opacity .7
      .icon
        font-size 14px
        font-family "iconfont"
        font-style normal
  .options
    .mb
      margin-bottom px2rem(20px)
      background #fff
      .option-list
        margin 0 px2rem(40px)
        .option-item
          display flex
          justify-content space-between
          width 100%
          height px2rem(160px)
          align-items center // 垂直居中
          .item-left
            .name
              font-size 18px
              vertical-align middle
            .icon
              font-family "iconfont"
              font-style normal
              font-size px2rem(60px)
              vertical-align middle
              color #1e90ff
          .item-right
            .desc
              padding-bottom px2rem(20px)
              font-size 18px
              text-align right
            .descInfo
              font-size 14px
              color #3e3e3e
              opacity .7
</style>
