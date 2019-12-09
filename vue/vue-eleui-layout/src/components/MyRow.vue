
<script>
// render jsx
export default {
  props: {
    tag: String
  },
  // vue的h函数
  render (h) {
    const tag = this.tag || 'div'
    // 第一个参数：标签名 组件名
    // 第二个参数：标签上的属性
    // 第三个参数：子节点
    return h(tag, {class: 'my-el-row'}, this.$slots.default)
  }
}
</script>

<style scoped>
.my-el-row {
  width: 100%;
}
</style>