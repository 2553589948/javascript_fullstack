
<script>
export default {
  props: {
    span: Number
  },
  render (h) {
    const tag = this.tag || 'div'
    const classCol = `my-el-col-${this.span}` 
    return h(tag, {class: classCol}, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
// .my-el-col-12 {
//   width: calc(1 / 24 * 12 * 100) + '%';
// }
@for $i from 0 through 24 {
  .my-el-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }
}
</style>