<template>
  <div class="mine">这是我的页面
      <!-- <router-link :to="{name: 'detail',params:{id: 123}}"><button class="go-detail">查看详情</button></router-link> -->
      <button class="go-detail" @click="seeDetail">查看详情</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods: {
        seeDetail() {
            this.$router.push({name: 'detail', params:{id: 456}})
        }
    }
}
</script>

<style>

</style>