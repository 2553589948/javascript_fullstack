<template>
  <div class="course-wrapper">
    <div class="course-header">
      <div class="video-box">
        <div class="video-task__player" v-if="courseList.length">
          <video controls :src="courseList[0].videoSrc"></video>
          <!-- <i class="icon-font i-play video-task__player-icon"></i> -->
        </div>
      </div>
      <div class="course-info">
        <ul class="info-list">
          <li class="info">
            <router-link :to="{path: '/CourseDetail/info', query: {courseId: courseId}}" replace class="tabbar__item">
              <span class="text">详情</span>
            </router-link>
          </li>
          <li class="directory">
            <router-link :to="{path: '/CourseDetail/entries', query: {courseId: courseId}}" replace class="tabbar__item">
              <span class="text">目录</span>
            </router-link>
          </li>
          <li class="related">
            <router-link :to="{path: '/CourseDetail/relateClass', query: {courseId: courseId}}" replace class="tabbar__item">
              <span class="text">相关课程</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view :comments="comments" :teachersInfo="teachersInfo" @changeVideo="selectEntry" :courseList="courseList" />
    <div class="comment-box">
      <van-cell-group>
        <van-field
          v-model="message"
          rows="1"
          :autosize="inputHeight"
          type="textarea"
          placeholder="我也来说两句"
          @input="getValue"
          @focus="onFocus"
          @blur="onBlur"
        />
      </van-cell-group>
      <van-button class="published" type="info" size="small" @click="publish" v-show="message">发表</van-button>
    </div>
  </div>
</template>

<script>
import { getDateDiff } from '@/common/js/utils'
export default {
  data () {
    return {
      message: '',
      comments: [],
      inputHeight: {},
      teachersInfo: [],
      courseId: '',
      courseList: []
    }
  },
  mounted () {
    this.courseId = this.$route.query.courseId
    this.getComments()
    this.getTeacherInfo()
    console.log(this.$route.query.courseId)
    this.getCourseEntries()
  },
  methods: {
    getValue (e) {
      // if (e === '') {
      //   this.inputHeight.minHeight = 10
      // } else {
      //   this.inputHeight.minHeight = 80
      // }
    },
    onFocus () {
    },
    onBlur () {
      // this.inputHeight.minHeight = 10
      // this.message = ''
    },
    // 获取评论数据
    getComments () {
      let _id = this.courseId
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/findComments',
        data: {
          id: _id
        }
      })
        .then((res) => {
          console.log(res)
          this.comments = res.data.reverse()
          console.log(this.comments)
          for (let i = 0; i < this.comments.length; i++) {
            let passtimeDiff = getDateDiff(this.comments[i].c_time)
            this.comments[i].c_time = passtimeDiff
          }
          // if (res.data.code === '200') {
          //   this.comments = res.data.data
          // } else {
          //   this.$toast(res.data.mess)
          // }
        })
    },
    // 发表评论
    publish () {
      let courseId = this.courseId
      let comment = this.message
      let userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      let nickname = JSON.parse(sessionStorage.getItem('userInfo')).nickname
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/insertNote',
        data: {
          note_content: comment,
          useId: userId,
          nickname: nickname,
          courseId: courseId
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.code === '200') {
            this.$toast(res.data.mess)
            this.message = ''
            this.getComments() // 让最新评论排在前面
          } else {
            this.$toast(res.data.mess)
          }
        })
    },
    // 获取老师信息
    getTeacherInfo () {
      let _id = this.courseId
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/findTeacherInfo',
        data: {
          id: _id
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.code === '200') {
            this.teachersInfo = res.data.data
          } else {
            this.$toast(res.data.mess)
          }
        })
    },
    // 获取课程目录
    getCourseEntries () {
      let _id = this.$route.query.courseId
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/findCourseEntries',
        data: {
          id: _id
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.code === '200') {
            this.courseList = res.data.data
          } else {
            this.$toast(res.data.mess)
          }
        })
    },
    // 更换课程章节
    selectEntry (videoSrc) {
      const videoEle = document.querySelector('.video-box video')
      videoEle.src = videoSrc
    }
  }
}
</script>

<style lang="css" scoped>
.comment-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background: #ddd;
  text-align: right;
}
.comment-box .published {
  /* position: absolute;
  right: 10px;
  bottom: 10px; */
  margin-right: 10px;
  margin-top: 10px;
}
.course-header {
  background:#eee;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 60;
}
.video-box{
  width: 100%;
}
.video-box video {
  width: 100%;
  height: 100%;
}
.video-task__player-icon.i-play {
  border: 4px solid #fff;
}
.icon-font {
  vertical-align: 1px;
}
.video-task__player-icon {
  display: block;
  margin: auto;
  border-radius: 35px;
  width: 54px;
  height: 54px;
  font-size: 24px;
  line-height: 54px;
  color: #fff;
  background-color: rgba(0,0,0,.4);
}
.course-info{
  width: 100%;
  height: 3rem;
  background-color: #fff;
  text-align: center;
}
ul li{
  float: left;
  width: 33.3333%;
  line-height: 45px;
}
.text{
  color:gray;
}
.router-link-active .text{
  color:#188fee;
}
.router-link-active:before {
  content: "";
  border-top: 3px solid #188fee;
  display: block;
  width: 100%;
  position: relative;
  top:44px;
  bottom: 0;
  left: 0;
  z-index: 2;
}
</style>
