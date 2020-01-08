<template>
  <div id="app">
    <!-- header -->
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Nav from '@/components/Nav.vue'

@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {
  
}
</script>>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
