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
  src url('//at.alicdn.com/t/font_1519920_dls1yahgtil.eot')
  src url('//at.alicdn.com/t/font_1519920_dls1yahgtil.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1519920_dls1yahgtil.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1519920_dls1yahgtil.woff') format('woff'),
  url('//at.alicdn.com/t/font_1519920_dls1yahgtil.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1519920_dls1yahgtil.svg#iconfont') format('svg')
}
</style>
