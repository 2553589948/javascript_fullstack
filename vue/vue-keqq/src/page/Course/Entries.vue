<template>
  <div class="entries-wrapper">
    <div class="sub-course-static">
      <div class="sub-course-static__title">授课方式：</div>
      <div class="sub-course-static__cate sub-course-static__record">
        <i class="i-course-record"></i>视频（0）
      </div>
      <div class="sub-course-static__cate sub-course-static__data">
        <i class="i-course-data"></i>资料（0）
      </div>
      <div class="sub-course-static__cate sub-course-static__test">
        <i class="i-course-test"></i>习题（0）
      </div>
    </div>
    <div class="sub-course-list-wrapper">
      <ul class="course-cnt__lesson-list" >
        <li class="course-cnt__lesson-item" v-for="(item, index) in courseList" :key="index">
          <div class="course-cnt__lesson-title">
            <div class="course-cnt__lesson-link" :class="{'selected': videoOrder === index}" @click="selectVideo(index)">
              <span class="course-cnt__lesson-no">{{item.entryOrder}}</span>
              <span class="course-cnt__lesson-title-word">{{item.entryTitle}}</span>
              <i class="icon-down-arrow i-v-bottom"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseList: {
      type: Array
    }
  },
  data () {
    return {
      videoOrder: 0
    }
  },
  mounted () {
  },
  methods: {
    selectVideo (idx) {
      this.videoOrder = idx
      this.$emit('changeVideo', this.courseList[idx].videoSrc)
    }
  }
}
</script>

<style scoped>
@import '../../common/css/icon.css';
.entries-wrapper {
  padding-top: 67.2%;
}
.sub-course-static {
  display: block;
  text-align: left;
  width: 100%;
  float:left;
  overflow: hidden;
  padding: 10px 0;
  max-height: 72px;
  font-size: 14px;
  line-height: 36px;
  color: #777;
}
.sub-course-static__title {
  display: inline-block;
  position: relative;
  left: 16px;
}
.sub-course-static__cate {
  padding: 0 15px;
  display: inline-block;
}
.i-course-record,.i-course-test, .i-course-data {
  display: inline-block;
  position: relative;
  top: 15px;
  left: 0;
  width: 32px;
  height: 28px;
  font-size: 18px;
  line-height: 28px;
  background-repeat: no-repeat;
  background-size: 26px auto;
}
.sub-course-static__test{
  position: relative;
  left: 75px;
}
.i-course-record {
  background-image: url(http://9.url.cn/edu/mobilev2/pages/courseDetail/img/task-video@2x.ea9e65a.png);
}
.i-course-data {
  background-image: url(http://9.url.cn/edu/mobilev2/pages/courseDetail/img/task-file@2x.f74b35b.png);
}
.i-course-test {
  background-image: url(http://9.url.cn/edu/mobilev2/pages/courseDetail/img/task-test@2x.f5e78fd.png);
}
.sub-course-list-wrapper{
  display: block;
  position: relative;
  top:100px;
  width: 100%;
  height: 200px;
}
.course-cnt__lesson-list{
  width: 100%;
  height: 90%;
  position:absolute;
}
.course-cnt__lesson-item{
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.course-cnt__lesson-no {
  display: block;
  float: left;
  position: relative;
  margin-right: 12px;
  margin-left: 12px;
  font-size: 16px;
  line-height: 52px;
  color: #bbb;
}
.course-cnt__lesson-title-word {
  float: left;
  overflow: hidden;
  -webkit-box-orient: vertical;
  max-width: 70%;
  max-height: 52px;
  font-size: 16px;
  line-height: 52px;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  display: block;
  white-space: nowrap;
  color:black;
}
.course-cnt__lesson-link.selected .course-cnt__lesson-title-word {
  color: #188fee;
}
.course-cnt__lesson-link{
  width: 100%;
  float:left;
}
.icon-down-arrow {
  position: relative;
  top: 50%;
  float:right;
  padding: 13px 16px 0 0;
  width: 24px;
  height: 24px;
  font-family: mfont;
  font-size: 16px;
  line-height: 24px;
  text-indent: 0;
  color: #a7a7a7;
  -webkit-font-smoothing: antialiased;
}
</style>
