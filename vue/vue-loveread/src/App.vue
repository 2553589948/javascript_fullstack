<template>
  <div id="app" class="defThemeColor">
    <v-tab></v-tab>
    <!-- <v-banner></v-banner> -->
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
  src: url('//at.alicdn.com/t/font_1519920_joyoql61ah.eot');
  src: url('//at.alicdn.com/t/font_1519920_joyoql61ah.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1519920_joyoql61ah.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1519920_joyoql61ah.woff') format('woff'),
  url('//at.alicdn.com/t/font_1519920_joyoql61ah.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1519920_joyoql61ah.svg#iconfont') format('svg');
}
.icon
  font-family "iconfont" !important
  font-style normal
</style>
