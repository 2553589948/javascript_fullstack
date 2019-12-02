<template>
  <div id="app">
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

<style lang="css">
@font-face {
  font-family: 'iconfont';  /* project id 1519920 */
  src: url('//at.alicdn.com/t/font_1519920_giqyhu0takm.eot');
  src: url('//at.alicdn.com/t/font_1519920_giqyhu0takm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1519920_giqyhu0takm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1519920_giqyhu0takm.woff') format('woff'),
  url('//at.alicdn.com/t/font_1519920_giqyhu0takm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1519920_giqyhu0takm.svg#iconfont') format('svg');
}
</style>
