<template>
  <div class="count">
    <!-- {{myCount}} -->
    {{count}}
    <!-- <button @click="add(5)">+</button> -->
    <button @click="addActions">+</button>
    <button @click="reduceActions">-</button>
    <!-- <button @click="reduce">-</button> -->
    {{getcount}}
    <!-- {{$store.state.count}} -->
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
  // mounted () {
  //   this.myCount = this.$store.state.count
  // },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },

  computed: {  //数据源数据很多时
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getcount'
    ])
  },

  // computed: mapState(['count']), 数据源数据少时

  // computed: mapState({
  //   myCount: state => state.count
  //   // myCount (state) {
  //   //   return state.count
  //   // }
  // }),

  methods: {
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addActions',
      'reduceActions'
    ])
  }

  // methods: {
  //   test () {
  //     this.myCount++
  //   }
  // }
}
</script>

<style>

</style>
