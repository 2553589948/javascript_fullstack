<template>
  <div class="a-test">
    A
    <testb></testb>
  </div>
</template>

<script>
import Be from './B'
export default {
  provide: { // 只能供子组件使用
    name: 'kyle'
  },
  data () {
    return {
      // name: 'kyle'
    }
  },
  components: {
    'testb': Be
  }
}
</script>

<style>

</style>