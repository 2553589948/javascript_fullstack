<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="small" @on-click="sub">提交</i-button>
    <i-button size="large" @on-click="confir">确定</i-button>
    <!-- <div @click="onsure">
      <i-button size="default" ref="confir">确定</i-button>
    </div> -->
    <!-- .native能识别子组件的点击事件 -->
    <i-button size="default" ref="confir" @click.native="onsure" @setim="getim">确定</i-button>
    <div>{{text}}</div>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: ''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    sub () {
      console.log('hello')
    },
    confir () {
      console.log('你好')
    },
    onsure () {
      this.$refs.confir.confire() // 调用子组件的方法
    },
    getim (val) {
      this.text = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
