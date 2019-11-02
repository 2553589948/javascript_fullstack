<template>
  <div id="wrapper">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" :src="this.tabs[0]">
        首页
      </mt-tab-item>
      <mt-tab-item id="category" v-bind:src="this.tabs[1]">
        <img slot="icon">
        分类
      </mt-tab-item>
      <mt-tab-item id="classtable" v-bind:src="this.tabs[2]">
        <img slot="icon">
        课程表
      </mt-tab-item>
      <mt-tab-item id="mine" v-bind:src="this.tabs[3]">
        <img slot="icon">
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
      tabs: [
        require('../assets/images/icon/home.gif'), require('../assets/images/icon/category.gif'), require('../assets/images/icon/classtable.gif'), require('../assets/images/icon/mine.gif')
      ]
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
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
