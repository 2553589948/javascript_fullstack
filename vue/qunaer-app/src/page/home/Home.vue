<template>
  <div class="home-page">
    <home-header />
    <home-swiper :list="swiperList"/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import Swiper from './Swiper'
export default {
  data () {
    return {
      swiperList: []
    }
  },
  mounted () {
    axios.get('/static/mock/index.json')
      .then(res => {
        if (res.data) {
          this.swiperList = res.data.data.swiperList
        }
      })
  },
  components: {
    HomeHeader: Header,
    HomeSwiper: Swiper
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/variable.scss";
.home-page {
  background: $homeBgColor
}
</style>
