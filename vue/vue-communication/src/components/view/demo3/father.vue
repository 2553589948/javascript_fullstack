<template>
  <div class="container">
    <h2>父组件</h2>
    <p>从子组件获取的消息为：</p>
    <span class="red">{{getMsg1}}</span>
    <child @message="getMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      getMsg1: ''
    }
  },
  components: {
    child
  },
  methods: {
    getMsg (msg) {
      this.getMsg1 = msg
    }
  }
}
</script>

<style>
.red {
  color: brown;
}
</style>
