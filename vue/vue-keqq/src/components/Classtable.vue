<template>
  <div class="wrapper">
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'classtable'
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style scoped>

</style>
