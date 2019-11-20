<template>
  <div class="main" v-show="visiable">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    visiable: Boolean
  }
}
</script>

<style scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  opacity: .6;
}
h2, p {
  color: #000;
}
</style>
