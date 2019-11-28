<template>
  <div class="load-container">
    <img src="../assets/images/load.gif">
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'load'
export default {
  name: COMPONENT_NAME
}
</script>
<style lang="stylus" scoped>
.load-container
  display flex
  justify-content center
  align-items center
  img
    width 20px
    height 20px
    display block
</style>
