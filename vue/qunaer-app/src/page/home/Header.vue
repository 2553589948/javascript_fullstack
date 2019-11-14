<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-input">
      <input type="text">
    </div>
    <div class="header-right">{{this.city}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: 'shanghai'
    }
  }
}
</script>

<style>

</style>
