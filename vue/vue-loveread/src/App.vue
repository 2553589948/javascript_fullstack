<template>
  <div id="app" class="defThemeColor">
    <v-tab></v-tab>
    <v-banner></v-banner>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'
import vbanner from '@/components/vbanner'
export default {
  name: 'App',
  components: {
    'v-tab': tab,
    'v-banner': vbanner
  }
}
</script>

<style lang="stylus">
@import './assets/css/themeColor.styl'
@font-face {
  font-family: 'iconfont';  /* project id 1519920 */
  src: url('//at.alicdn.com/t/font_1519920_kx49n4vbsc.eot');
  src: url('//at.alicdn.com/t/font_1519920_kx49n4vbsc.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1519920_kx49n4vbsc.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1519920_kx49n4vbsc.woff') format('woff'),
  url('//at.alicdn.com/t/font_1519920_kx49n4vbsc.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1519920_kx49n4vbsc.svg#iconfont') format('svg');
}
.icon
  font-family "iconfont" !important
  font-style normal
</style>
