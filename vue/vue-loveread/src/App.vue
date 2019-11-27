<template>
  <div id="app">
    <v-tab></v-tab>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    'v-tab': tab
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family 'iconfont'  /* project id 1519920 */
  src url('//at.alicdn.com/t/font_1519920_nbpwfaa9y7p.eot');
  src url('//at.alicdn.com/t/font_1519920_nbpwfaa9y7p.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1519920_nbpwfaa9y7p.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1519920_nbpwfaa9y7p.woff') format('woff'),
  url('//at.alicdn.com/t/font_1519920_nbpwfaa9y7p.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1519920_nbpwfaa9y7p.svg#iconfont') format('svg')
}
</style>
