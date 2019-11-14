<template>
  <div class="container">
    <!-- <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div> -->
    <child :send-msg="msg" :send-num="myNum" :send-obj="myObj"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      msg: '我是父组件的信息',
      myNum: 123,
      myObj: [
        {
          id: 1,
          name: '张三'
        },
        {
          id: 2,
          name: '里斯'
        }
      ]
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>