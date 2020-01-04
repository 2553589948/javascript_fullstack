<template>
  <div class="wrapper">我的
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'mine'
    }
  },
  mounted () {
    this.$router.replace({path: '/login'})
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style>

</style>
