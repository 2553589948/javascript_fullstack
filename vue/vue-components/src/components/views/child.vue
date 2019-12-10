<template>
  <div class="child">child1
    <button @click="send">派发</button>
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data () {
    return {
      message: '我是child1里面的数据'
    }
  },
  methods: {
    send () {
      bus.$emit('test', this.message)
      // this.$dispatch('test', this.message) // vue2.0已经不支持该方法
      // this.$broadcast('test', this.message) // vue2.0已经不支持该方法
    }
  }
}
</script>

<style>

</style>