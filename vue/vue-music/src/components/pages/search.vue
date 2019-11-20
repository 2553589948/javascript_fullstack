<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box @query="onQueryChange"></v-search-box>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  components: {
    'v-search-box': searchBox
  },
  methods: {
    onQueryChange () {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
</style>
