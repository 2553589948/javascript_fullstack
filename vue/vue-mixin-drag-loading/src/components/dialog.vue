<template>
  <div>
    <span @mousedown="start" style="position: fixed;left: 0;top: 0;">这是一个拖拽的文本</span>
    <el-button @click="open">open</el-button>
    <el-dialog title="tips" :visible="visible">
      <span @click="close">这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
import dragAbleMix from './drag'
export default {
  mixins: [dragAbleMix],
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    }
  }
}
</script>

<style>

</style>