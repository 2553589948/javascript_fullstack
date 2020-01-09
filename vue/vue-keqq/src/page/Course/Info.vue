<template>
  <div class="basic-info-list">
    <div class="basic-info-list__item title-bar">
      <h1 class="title-bar__title">{{courseInfo.courseTitle}}</h1>
      <div class="title-bar__info">
        <p class="title-bar__info-static">
          <span class="title-bar__info-item u-message">报名人数<em>{{courseInfo.followCount}}</em></span>
          <!-- <span class="title-bar__info-item u-comment">好评率<em>99%</em></span> -->
          <span class="title-bar__info-item u-message"><em>{{comments.length}}</em>评论</span>
        </p>
        <p class="title-bar__info-price">
          <span class="title-bar__info-item u-price">{{courseInfo.courPrice}}</span>
        </p>
      </div>
      <div class="basic-info-list__item basic-info-list__item--teachers">
        <p class="basic-info-list__item-title">
          老师介绍
          <span class="basic-info-list__item-title-static">({{teachersInfo.length}})</span>
        </p>
        <ul class="basic-info-list__teachers-list">
          <li class="basic-info-list__teachers-list-item"
          v-for="(item, index) in teachersInfo" :key="index">
            <div class="basic-info-list__teachers-list-mod">
              <div class="basic-info-list__teachers-list-top">
                <div class="basic-info-list__teachers-list-item-img">
                  <img :src="item.avatar" alt="">
                </div>
                <p class="basic-info-list__teachers-list-item-name">{{item.tNickname}}</p>
                <p class="basic-info-list__teachers-list-item-static">好评度 -</p>
                <p class="basic-info-list__teachers-list-item-static">课程数 4</p>
                <p class="basic-info-list__teachers-list-item-static">学生数 3万</p>
              </div>
              <div class="basic-info-list__teachers-list-item-info">{{item.tIntro}}</div>
            </div>
          </li>
        </ul>
        <div class="basic-info-list__teachers-more">
          <i class="icon-font i-v-bottom basic-info-list__teachers-icon"></i>
          <i class="icon-font i-v-top basic-info-list__teachers-icon"></i>
        </div>
        </div>
      </div>
      <div class="mod-detail-info">
        <p class="mod-di-title">
          <span class="mod-di-title-word">课程详情</span>
        </p>
        <div class="mod-di-content">
          <p>
            <span style="color:#ff0000;">
              <span style="font-size:20px;">
                {{courseInfo.courseIntro}}
              </span>
            </span>
          </p>
          <div>
            <img :src="courseInfo.introPic" alt="">
          </div>
        </div>
      </div>
      <div class="basic-info-list__item basic-info-list__item--comment">
        <p class="basic-info-list__item-title">
          <span class="basic-info-list__item-title-word comment-word">学员评论</span>
          <span class="basic-info-list__item-title-static">({{comments.length}})</span>
          <em class="basic-info-list__check-all" @click="allComments">查看全部<i class="icon-font i-v-right"></i></em>
        </p>
        <ul class="mod-comments-list__list">
          <li class="comments-list__item" v-for="(item, index) in slicomments" :key="index">
            <div class="comments-list-item__info">
              <div class="comments-list-item__cover">
                <img class="comments-list-item__img" src="http://thirdwx.qlogo.cn/mmopen/vi_32/z6icVEE3NvYHfuJTcA3XibibrWNhRdWgWE231vE2RYXVMayvWibpsiaYcHFRGaSJRkB4MELxeXmuibvAj1TSu01OLIhw/132">
              </div>
              <div class="comments-list-item__name">{{item.nickname}}</div>
            </div>
            <div class="comments-list-item__comment">
                <div class="comments-list-item__content">{{item.comment}}</div>
                <div class="comments-list-item__progress">
                  <!-- 学习进度80% -->
                  <div class="comments-list-item__date">{{item.c_time}}</div>
                </div>
              </div>
          </li>
        </ul>
      </div>
      <div class="basic-info-list__item basic-info-list__item--agency">
        <p class="basic-info-list__item-title">机构介绍</p>
        <div class="basic-info-list__agency-hd">
          <img :src="courseInfo.eduOrgPic" alt="" class="basic-info-list__agency-img">
          <div class="basic-info-list__agency-hd-right">
            <p class="basic-info-list__agency-name">{{courseInfo.eduOrgName}}</p>
          </div>
          <ul class="basic-indo-list__agency-comment-list">
            <li class="basic-info-list__agency-comment-list-item">
              <span class="basic-info-list__agency-comment-list-item-score basic-info-list__agency-comment-list-item-score--student">99%</span>
              <span class="basic-info-list__agency-comment-list-item-hd">好评度</span>
            </li>
            <li class="basic-info-list__agency-comment-list-item">
              <span class="basic-info-list__agency-comment-list-item-score basic-info-list__agency-comment-list-item-score--desc">{{courseInfo.courseCount}}</span>
              <span class="basic-info-list__agency-comment-list-item-hd">课程数</span>
            </li>
            <li class="basic-info-list__agency-comment-list-item">
              <span class="basic-info-list__agency-comment-list-item-score basic-info-list__agency-comment-list-item-score--teacher">{{courseInfo.stuCount}}</span>
              <span class="basic-info-list__agency-comment-list-item-hd">学生数</span>
            </li>
          </ul>
        </div>
        <p class="basic-info-list__agency-info">{{courseInfo.eduOrgIntro}}</p>
      </div>
      <div style="height:100px;"></div>
    </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array
    },
    teachersInfo: {
      type: Array
    }
  },
  data () {
    return {
      courseInfo: []
    }
  },
  mounted () {
    this.getCourseInfo()
  },
  computed: {
    slicomments () {
      return this.comments.slice(0, 2)
    }
  },
  methods: {
    allComments () {
      this.$router.push({path: '/CourseDetail/comment', query: {courseId: this.courseInfo.courseId}})
    },
    // 获取课程详情
    getCourseInfo () {
      let _id = this.$route.query.courseId
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/findCourseInfo',
        data: {
          id: _id
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.code === '200') {
            this.courseInfo = res.data.data
          } else {
            this.$toast(res.data.mess)
          }
        })
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../common/css/icon.css';
.basic-info-list{
  padding-top: 239px;
  background: #eee;
}
.basic-info-list__item {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 9rem;
  margin-bottom: 10px;
  background: #fff;
}
.title-bar__title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-bottom: 8px;
    padding: 15px 25px 0 15px;
    font-size: 18px;
    line-height: 25px;
    white-space: pre-wrap;
    word-break: break-word;
    color: #000;
    -webkit-line-clamp: 2;
    text-align: left;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400;
}
.title-bar__info-static{
  text-align: left;
}
.title-bar__info {
    padding: 0 25px 0 15px;
}
.title-bar__info .u-message {
    margin-right: 13px;
    border-right: 1px solid #ececec;
}
.title-bar__info .u-comment, .title-bar__info .u-commun, .title-bar__info .u-message {
    display: inline-block;
    margin: 0;
    padding-right: 15px;
    height: 14px;
    font-size: 14px;
    line-height: 14px;
    color: #777;
}
.title-bar__info .u-comment em, .title-bar__info .u-commun em, .title-bar__info .u-message em {
    font-style: normal;
}
.title-bar__info-price {
    padding: 10px 0;
    line-height: 24px;
    text-align: left;
}
.title-bar__info-price .u-price {
    color: #9bef37;
}
.basic-info-list__item {
    overflow: hidden;
    position: relative;
    margin: 10px 0 10px 0;
    width: 100%;
    height: 100%;
    background: #fff;
}
.basic-info-list__item-title {
    padding-left: 15px;
    height: 35px;
    font-size: 18px;
    line-height: 35px;
    color: #000;
    text-align: left;
}
.basic-info-list__item-title-static {
    padding-left: 4px;
    font-size: 16px;
    color: #777;
}
.basic-info-list__teachers-list, .basic-info-list__teachers-list-more {
    padding: 0 15px;
}
.basic-info-list__teachers-list-item {
    position: relative;
    margin-top: 10px;
    height: 205px;
}
.basic-info-list__teachers-list-mod {
    position: absolute;
    top: 35px;
    border: 1px solid #ddd;
    width: 100%;
    height: 170px;
}
.basic-info-list__teachers-list-item-img {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 10px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    width: 100px;
    height: 100px;
}
.basic-info-list__teachers-list-top {
    overflow: hidden;
    position: absolute;
    top: -30px;
    right: 50%;
    padding: 0 10px 0 130px;
    height: 100px;
    background: #fff;
    transform: translateX(50%);
}
.basic-info-list__teachers-list-item-img img {
    width: 100%;
    height: 100%;
}
.basic-info-list__teachers-list-item-name {
    overflow: hidden;
    padding-top: 7px;
    width: 110px;
    font-size: 18px;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #333;
}
.basic-info-list__teachers-list-item-static {
    padding-top: 7px;
    font-size: 14px;
    line-height: 14px;
    color: #777;
}
.basic-info-list__teachers-list-item-info {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    padding: 85px 24px 0;
    height: 66px;
    font-size: 14px;
    line-height: 22px;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    word-break: break-word;
    color: #666;
    -webkit-line-clamp: 3;
}
.basic-info-list__teachers-more {
    height: 35px;
    text-align: center;
    color: #777;
    line-height: 35px;
}
/* .list__teachers-more i {
    font-size: 20px;
    line-height: 50px;
} */
.icon-font {
    vertical-align: 1px;
}
.icon-font {
    position: relative;
    font-family: mfont;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    vertical-align: -2px;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
}
.basic-info-list__teachers-more .i-v-top {
    display: none;
}
.mod-detail-info {
    margin-bottom: 10px;
    padding: 0 15px;
    background: #fff;
}
.mod-di-title {
    position: relative;
    padding: 15px 0 10px;
    font-size: 18px;
    line-height: 25px;
    color: #000;
    text-align: left;
}
.mod-di-content {
    overflow: hidden;
    padding-bottom: 12px;
    font-size: 14px;
    line-height: 25px;
    word-break: break-word;
    color: #777;
    text-align: left;
}
.mod-di-content img {
    padding-top: 10px;
    display: inline-block;
    min-width: 1px;
    max-width: 100%;
    line-height: 1;
    vertical-align: -2px;
}
.comment-word{
  line-height: 45px;
}
.basic-info-list__check-all {
    float: right;
    padding-right: 32px;
    font-size: 14px;
    font-style: normal;
    line-height: 45px;
    color: #999;
}
.basic-info-list__item .i-v-right {
    display: block;
    position: absolute;
    top: 15px;
    right: 5px;
    font-size: 14px;
    color: #999;
}
.mod-comments-list__list {
    margin: 0 15px;
    min-height: 0;
}
.mod-comments-list__list .comments-list__item {
    position: relative;
    margin-top: 15px;
    padding-bottom: 10px;
    font-size: 12px;
    line-height: 16px;
}
.comments-list-item__info {
    position: relative;
    margin-bottom: 10px;
    padding-left: 105px;
    height: 45px;
    line-height: 20px;
    vertical-align: bottom;
}
.comments-list-item__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 45px;
}
.comments-list-item__img {
    border-radius: 50%;
    width: 45px;
    height: 45px;
}
.mod-comments-list__list .comments-list-item__name {
    position: absolute;
    top: 12px;
    left: 65px;
}
.comments-list-item__content {
    padding:5px 0 15px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
    color: #000;
    text-align: left;
}
.mod-comments-list__list .comments-list-item__progress {
    position: relative;
    padding-bottom: 15px;
    color: #bbb;
    text-align: left;
}
.mod-comments-list__list .comments-list-item__date {
    position: relative;
    top: 0;
    right: 0;
    float:right;
    color: #bbb;
}
.basic-info-list__agency-hd {
    padding: 0 15px;
    height: 70px;
}
.basic-info-list__agency-img {
    float: left;
    width: 70px;
    height: 70px;
}
.basic-info-list__agency-hd-right {
    overflow: hidden;
    margin-left: 85px;
    padding-top: 4px;
    height: 22px;
    text-align: left;
}
.basic-info-list__agency-name {
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    height: 21px;
    font-size: 16px;
    line-height: 21px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-word;
    color: #188eee;
}
.basic-info-list__agency-comment-list {
    overflow: hidden;
    margin-left: 85px;
    padding-top: 8px;
}
.basic-info-list__agency-comment-list-item {
    float: left;
    position: relative;
    padding: 8px 15px;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #777;
}
.basic-info-list__agency-comment-list-item-hd {
    display: block;
    padding-top: 3px;
}
.basic-info-list__agency-comment-list-item:after {
    position: absolute;
    top: 5px;
    left: 0;
    border-left: 1px solid #ececec;
    width: 1px;
    height: 20px;
    content: "";
}
.basic-info-list__agency-comment-list-item:first-child:after {
    border-left: 0;
}
.basic-info-list__agency-info {
    padding: 15px;
    font-size: 14px;
    line-height: 25px;
    white-space: pre-wrap;
    word-break: break-word;
    text-align: left;
}
</style>
