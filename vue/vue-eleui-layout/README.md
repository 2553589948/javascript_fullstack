# babel
js的语法编译器
es6 class关键字 -> babel编译后 -> es5的代码
里面有丰富的插件机制

vue提供了 transform-vue-jsx 负责将template编译为js

<el-row>
    <el-col>12</el-col>
    <el-col>6</el-col>
    <el-col>6</el-col>
</el-row>
babel编译后
h("el-row", [h("el-col", ["12"]), h("el-col", ["6"]), h("el-col", ["6"])]);

<template>
  <div class="my-el-row">
    <slot></slot>
  </div>
  <!-- h('div') -->
</template>