<template>
  <div class="wrapper">
    <section class="top-tip">
      <header class="m-header2 border-bottom border-top" id="m-header">
        <p class="m-header2__logo">
          <i class="icon-font i-logo"></i>
        </p>
        <form class="m-header2__search">
          <div class="m-header2__tips">
            <i class="icon-font i-search"></i>
            <span class="m-header2__tips-word">搜索老师、机构、课程</span>
          </div>
          <router-link to="../page/search">
            <input
              class="m-header2__input z-abled"
              type="search"
              maxlength="40"
              autocomplete="off"
              autocorrect="off"
            />
          </router-link>
        </form>
      </header>
    </section>
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'index'
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style scoped>

</style>
