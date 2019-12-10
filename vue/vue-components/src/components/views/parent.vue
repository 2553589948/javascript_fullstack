<template>
  <div class="parent">
    <Child></Child>
    parent
    <Child2></Child2>
  </div>
</template>

<script>
import Child from './child'
import Child2 from './child2'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Child,
    Child2
  },
  mounted () {
    this.$on('test', (text) => {
      console.log(text)
    })
  }
}
</script>

<style>

</style>