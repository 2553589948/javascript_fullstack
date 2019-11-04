<template>
  <div id="wrapper">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" class="icon-font" :src="indexsrc" />
        首页
      </mt-tab-item>
      <mt-tab-item id="category">
        <img slot="icon" class="icon-font" :src="categorysrc" />
        分类
      </mt-tab-item>
      <mt-tab-item id="classtable">
        <img slot="icon" class="icon-font" :src="classtablesrc" />
        课程表
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" class="icon-font" :src="minesrc" />
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
      selected: this.current,
      indexsrc: 'static/home.png',
      categorysrc: 'static/category.png',
      classtablesrc: 'static/classtable.png',
      minesrc: 'static/mine.png'
      // [require('../assets/images/icon/home.png'), require('../assets/images/icon/category.png'), require('../assets/images/icon/classtable.png'), require('../assets/images/icon/mine.png')]
    }
  },
  watch: {
    selected: function (val) {
      if (val === 'index') {
        this.$router.push('/')
        this.indexsrc = 'static/home.gif'
      } else {
        this.indexsrc = 'static/home.png'
      }
      if (val === 'category') {
        this.$router.push('/category')
        this.categorysrc = 'static/category.gif'
      } else {
        this.categorysrc = 'static/category.png'
      }
      if (val === 'classtable') {
        this.$router.push('classtable')
        this.classtablesrc = 'static/classtable.gif'
      } else {
        this.classtablesrc = 'static/classtable.png'
      }
      if (val === 'mine') {
        this.$router.push('/mine')
        this.minesrc = 'static/mine.gif'
      } else {
        this.minesrc = 'static/mine.png'
      }
    }
    // selected: function (val) {
    //   switch (val) {
    //     case 'index':
    //       this.$router.push({path: '/'})
    //       break
    //     case 'category':
    //       this.$router.push({path: '/category'})
    //       break
    //     case 'classtable':
    //       this.$router.push({path: '/classtable'})
    //       break
    //     case 'mine':
    //       this.$router.push({path: '/mine'})
    //       break
    //     default:
    //       break
    //   }
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
