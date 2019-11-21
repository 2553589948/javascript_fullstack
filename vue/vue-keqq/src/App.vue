<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
i {
  font-style: normal;
}
a, div {
  -webkit-tap-highlight-color: transparent;
}
ul, li {
  list-style: none;
}
.icon-font {
  font-family: "mfont"!important;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  vertical-align: -2px;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  margin-right: 5px;
}
</style>
