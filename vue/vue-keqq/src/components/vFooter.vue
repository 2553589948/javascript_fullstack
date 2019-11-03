<template>
  <div id="wrapper">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" class="icon-font">
        首页
      </mt-tab-item>
      <mt-tab-item id="category">
        <img slot="icon" class="icon-font">
        分类
      </mt-tab-item>
      <mt-tab-item id="classtable">
        <img slot="icon" class="icon-font">
        课程表
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" class="icon-font">
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
