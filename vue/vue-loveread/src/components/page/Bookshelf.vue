<template>
  <div class="bookShelf-wrapper">
    <v-header>
      <i class="icon" slot="left-icon">&#xe603;</i>
      <span slot="content">书架</span>
      <span slot="right-icon" style="font-size: 18px;">
        编辑
      </span>
    </v-header>
    <div class="bookShelf-content">
      <van-swipe-cell :before-close="beforeClose" :stop-propagation="true">
        <van-cell :border="false" value="内容">
          <div class="title">你哈</div>
          <div class="author">流</div>
          <div class="time">2373hms</div>
        </van-cell>
        <template slot="right">
          <van-button square type="danger" text="删除" @click="deleteBookList" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import vheader from '@/components/vheader'
import { Dialog } from 'vant';
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose ({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定要删除吗？'
          }).then(() => {
          });
          break;
      }
    },
    deleteBookList () {
      Dialog.confirm({
        title: '提示',
        message: '确定要删除吗？'
      }).then(() => {
      })
    }
  },
  mounted () {
  },
  components: {
    'v-header': vheader
  }
}
</script>

<style lang="stylus" scoped>
.bookShelf-wrapper
  z-index -1
  .bookShelf-content
    width 100%
</style>
