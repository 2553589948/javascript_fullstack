<template>
  <div class="b-test">
    B{{name}}
    <testc></testc>
  </div>
</template>

<script>
import Ce from './c'
export default {
  inject: ['name'],
  mounted () {
    console.log(this.name)
  },
  components: {
    'testc': Ce
  }
}
</script>

<style>

</style>