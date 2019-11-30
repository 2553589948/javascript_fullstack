<template>
  <div class="themeColor" ref="mine">
    <!-- 头部 -->
    <v-header class="mineHeader">
      <i class="icon" slot="left-icon">&#xe623;</i>
      <span slot="content" @click="changeColor">换肤</span>
      <router-link to="" slot="right-icon">
        <i class="icon">&#xe624;</i>
      </router-link>
    </v-header>
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
    changeColor () {
      console.log(this.$refs.mine.className)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.themeColor
  background-color var(--theme_color)
</style>
