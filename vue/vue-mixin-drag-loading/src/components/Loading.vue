<template>
  <div>
    <el-button @click="open">open</el-button>
    <el-button @click="close">close</el-button>
    <el-table v-loading="visible" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import mixin from './visiable'
export default {
  mixins: [mixin]
}
</script>

<style>

</style>