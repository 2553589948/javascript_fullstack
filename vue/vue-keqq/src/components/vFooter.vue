<template>
  <div id="tabbar-wrapper">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        <img slot="icon" v-show="!(selected === 'index')" src="/static/home.png" />
        <img slot="icon" v-show="selected === 'index'" src="/static/home.gif" />
        首页
      </mt-tab-item>
      <mt-tab-item id="category">
        <img slot="icon" v-show="!(selected === 'category')" src="/static/category.png" />
        <img slot="icon" v-show="selected === 'category'" src="/static/category.gif" />
        分类
      </mt-tab-item>
      <mt-tab-item id="classtable">
        <img slot="icon" v-show="!(selected === 'classtable')" src="/static/classtable.png" />
        <img slot="icon" v-show="selected === 'classtable'" src="/static/classtable.gif" />
        课程表
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" v-show="!(selected === 'mine')" src="/static/mine.png" />
        <img slot="icon" v-show="selected === 'mine'" src="/static/mine.gif" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  props: {
    current: String
  },
  data () {
    return {
      selected: this.current
      // [require('../assets/images/icon/home.png'), require('../assets/images/icon/category.png'), require('../assets/images/icon/classtable.png'), require('../assets/images/icon/mine.png')]
    }
  },
  watch: {
    selected: function (val) {
      switch (val) {
        case 'index':
          this.$router.push({path: '/'})
          break
        case 'category':
          this.$router.push({path: '/category'})
          break
        case 'classtable':
          this.$router.push({path: '/classtable'})
          break
        case 'mine':
          this.$router.push({path: '/mine'})
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
