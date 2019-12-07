<template>
  <div class="c-test">CCC:{{name}}
    <div class="c-test">age:{{app.userInfo.age}}</div>
  </div>
  
</template>

<script>
export default {
  inject: ['name', 'app'], // 在app中可全局引入,在此不可修改传过来数据
}
</script>

<style>

</style>