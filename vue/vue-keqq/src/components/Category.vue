<template>
  <div class="wrapper">分类
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'category'
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style>

</style>
