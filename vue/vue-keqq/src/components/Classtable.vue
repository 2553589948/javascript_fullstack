<template>
  <div class="wrapper" style="padding-bottom: 60px; background-color: #532f2f;">
    <div class="header">
      <div class="left">课程表</div>
      <div class="allSelect" v-show="!editCancel">全选(0)</div>
      <div class="del" v-show="!editCancel" style="background: red; padding: 0 20px;">删除</div>
      <div class="right" @click="edit">{{editHtml}}</div>
    </div>
    <ul class="course-list">
      <li class="course list-view__item">
        <div class="course__cover">
          <div class="course__cover-img" style="background-image:url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp);"></div>
          <div class="course__cover-mask"></div>
        </div>
        <div class="course__name-box">
          <div v-show="!editCancel" class="icon" :class="[Listids.length ? 'active' : '']"></div>
          <h3 class="course__name">PHP开发入门基础/web前端/MySQL/模板引擎/框架</h3>
        </div>
        <p class="course__msg">
          <i class="icon-font i-course-record"></i>
          <span class="course__sub-name">继续学习：第2节 自定义函数（上）</span>
        </p>
      </li>
      <li class="course list-view__item">
        <div class="course__cover">
          <div class="course__cover-img" style="background-image:url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp);"></div>
          <div class="course__cover-mask"></div>
        </div>
        <div class="course__name-box">
          <div v-show="!editCancel" class="icon" :class="[Listids.length ? 'active' : '']"></div>
          <h3 class="course__name">PHP开发入门基础/web前端/MySQL/模板引擎/框架</h3>
        </div>
        <p class="course__msg">
          <i class="icon-font i-course-record"></i>
          <span class="course__sub-name">继续学习：第2节 自定义函数（上）</span>
        </p>
      </li>
      <li class="course list-view__item">
        <div class="course__cover">
          <div class="course__cover-img" style="background-image:url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp);"></div>
          <div class="course__cover-mask"></div>
        </div>
        <div class="course__name-box">
          <div v-show="!editCancel" class="icon" :class="[Listids.length ? 'active' : '']"></div>
          <h3 class="course__name">PHP开发入门基础/web前端/MySQL/模板引擎/框架</h3>
        </div>
        <p class="course__msg">
          <i class="icon-font i-course-record"></i>
          <span class="course__sub-name">继续学习：第2节 自定义函数（上）</span>
        </p>
      </li>
      <li class="course list-view__item">
        <div class="course__cover">
          <div class="course__cover-img" style="background-image:url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp);"></div>
          <div class="course__cover-mask"></div>
        </div>
        <div class="course__name-box">
          <div v-show="!editCancel" class="icon" :class="[Listids.length ? 'active' : '']"></div>
          <h3 class="course__name">PHP开发入门基础/web前端/MySQL/模板引擎/框架</h3>
        </div>
        <p class="course__msg">
          <i class="icon-font i-course-record"></i>
          <span class="course__sub-name">继续学习：第2节 自定义函数（上）</span>
        </p>
      </li>
      <li class="course list-view__item">
        <div class="course__cover">
          <div class="course__cover-img" style="background-image:url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp);"></div>
          <div class="course__cover-mask"></div>
        </div>
        <div class="course__name-box">
          <div v-show="!editCancel" class="icon" :class="[Listids.length ? 'active' : '']"></div>
          <h3 class="course__name">PHP开发入门基础/web前端/MySQL/模板引擎/框架</h3>
        </div>
        <p class="course__msg">
          <i class="icon-font i-course-record"></i>
          <span class="course__sub-name">继续学习：第2节 自定义函数（上）</span>
        </p>
      </li>
    </ul>
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'classtable',
      Listids: [],
      editCancel: true
    }
  },
  methods: {
    edit () {
      this.editCancel = !this.editCancel
    }
  },
  computed: {
    editHtml () {
      return this.editCancel ? '编辑' : '取消'
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style scoped>
.icon {
  height: 34px;
  width: 34px;
  background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat center center;
  background-size: 34px 34px;
  margin-right: 20px;
}
.icon.active {
  background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat center center;
  background-size: 34px 34px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  background: #e9e9e9;
  z-index: 100;
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
}
.course-list {
  padding-top: 50px;
  background-color: #532f2f;
}
.course {
  position: relative;
  margin: 10px auto;
  border-radius: 5px;
  height: 8.5rem;
  background: #fff;
  width: 90%;
}
.course__cover {
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.course__cover-img {
  width: 100%;
  height: 96px;
  background: url(//9.url.cn/edu/mobilev2/img/default-img.74ba483.png);
  background-size: 100% 96px;
  -webkit-filter: blur(12px);
  filter: blur(12px);
}
.course__cover-mask {
  background: rgba(0,0,0,.3);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 100%;
}
.course__name-box {
  overflow: hidden;
  position: relative;
  top: 1.25rem;
  margin: 0 auto;
  width: 95%;
  height: 4.25rem;
  z-index:99;
}
.course__name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  max-height: 48px;
  font-size: 14px;
  line-height: 24px;
  vertical-align: middle;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: #fff;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  -webkit-line-clamp: 1;
}
.course__msg {
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  color: #666;
  margin: 0;
  text-align: left;
}
.course__msg .icon-font {
  position: relative;
  top: -2px;
  margin-right: 7px;
  color: #d1e8fc;
}
.i-course-record:before {
  content: "\f03e";
}
</style>
