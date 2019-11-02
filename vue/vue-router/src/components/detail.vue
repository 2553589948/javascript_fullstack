<template>
  <div class="detail">这是详情页面
      <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route.params.id)
    }
}
</script>

<style>

</style>