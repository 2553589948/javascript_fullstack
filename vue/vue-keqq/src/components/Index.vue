<template>
  <div class="wrapper">
    首页
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'index'
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style scoped>

</style>
