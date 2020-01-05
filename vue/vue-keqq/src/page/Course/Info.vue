<template>
  <div class="basic-info-list">
    <div class="basic-info-list__item title-bar">
      <h1 class="title-bar__title">CD-Linux高级运维架构师课程/云计算/安全/docker/虚拟化/调优
      </h1>
      <div class="title-bar__info">
        <p class="title-bar__info-static">
          <span class="title-bar__info-item u-message">报名人数<em>2万</em></span>
          <span class="title-bar__info-item u-comment">好评率<em>99%</em></span>
          <span class="title-bar__info-item u-message"><em>{{comments.length}}</em>人评论</span>
        </p>
        <p class="title-bar__info-price">
          <span class="title-bar__info-item u-price">免费</span>
        </p>
      </div>
      <div class="basic-info-list__item basic-info-list__item--teachers">
        <p class="basic-info-list__item-title">
          老师介绍
          <span class="basic-info-list__item-title-static">(5)</span>
        </p>
        <ul class="basic-info-list__teachers-list">
          <li class="basic-info-list__teachers-list-item">
            <div class="basic-info-list__teachers-list-mod">
              <div class="basic-info-list__teachers-list-top">
                <div class="basic-info-list__teachers-list-item-img">
                  <img src="http://10.url.cn/eth/ajNVdqHZLLCHNUDvsBaTEXfL8OlNnu7gf9QqQ6bibU9lEl8TY65oib3N4YxKLeIicVFshFen5AZ7U0/" alt="">
                </div>
                <p class="basic-info-list__teachers-list-item-name">学神IT-班主任-刘超</p>
                <p class="basic-info-list__teachers-list-item-static">好评度 -</p>
                <p class="basic-info-list__teachers-list-item-static">课程数 4</p>
                <p class="basic-info-list__teachers-list-item-static">学生数 3万</p>
              </div>
              <div class="basic-info-list__teachers-list-item-info">刘超老师-资深HR，人力资源专家，现任学神IT就业指导顾问，帮助学员推荐就业，在此恭祝各位加入学神IT，4个月的高温锻造，体会自信与成功，从此在运维架构师之路上势如破竹，如日中天，步步高升！
              </div>
            </div>
          </li>
          <li class="basic-info-list__teachers-list-item">
            <div class="basic-info-list__teachers-list-mod">
              <div class="basic-info-list__teachers-list-top">
                <div class="basic-info-list__teachers-list-item-img">
                  <img src="http://q4.qlogo.cn/g?b=qq&amp;k=wfmsxsncsZHsy9O3Azp6xA&amp;s=640&amp;t=1431404340" alt="">
                </div>
                <p class="basic-info-list__teachers-list-item-name">学神IT-顾问-姚老师</p>
                <p class="basic-info-list__teachers-list-item-static">好评度 99%</p>
                <p class="basic-info-list__teachers-list-item-static">课程数 30</p>
                <p class="basic-info-list__teachers-list-item-static">学生数 18万</p>
              </div>
              <div class="basic-info-list__teachers-list-item-info">姚老师-学神教育女一号，曾任猎聘网人力总监，高级猎头，在互联网行业拥有丰富的人脉，现任学神教育就业部总负责人，已帮助上万学员找到自己心仪的工作。如果你想找到更好的工作，我将助你一臂之力
              </div>
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
                <strong>热烈庆祝学神IT与腾讯强强联合，共推linux高级架构师课程，已帮助上万学员实现高薪梦想，更多优秀学员进驻腾讯公司。</strong>
              </span>
            </span>
          </p>
          <p>
            <img src="https://10.url.cn/qqke_course_info/ajNVdqHZLLAicHQUQUClbYvb12KJLkoicEibIjTk9KNOxzar6sicMUuzib3pLFntCDPJ8AHj4RGL8tt8/?tp=webp" alt="">
          </p>
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
          <img src="http://p.qpic.cn/qqcourse/QFzQYCgCrxmHkd3RGCuib9RHkJA4R5g8DxW82j8IpDQL5fFQ9sDXOvtJTTJiboAy1a/" alt="" class="basic-info-list__agency-img">
          <div class="basic-info-list__agency-hd-right">
            <p class="basic-info-list__agency-name">学神IT教育</p>
          </div>
          <ul class="basic-indo-list__agency-comment-list">
            <li class="basic-info-list__agency-comment-list-item">
              <span class="basic-info-list__agency-comment-list-item-score basic-info-list__agency-comment-list-item-score--student">99%</span>
              <span class="basic-info-list__agency-comment-list-item-hd">好评度</span>
            </li>
            <li class="basic-info-list__agency-comment-list-item">
              <span class="basic-info-list__agency-comment-list-item-score basic-info-list__agency-comment-list-item-score--desc">83</span>
              <span class="basic-info-list__agency-comment-list-item-hd">课程数</span>
            </li>
            <li class="basic-info-list__agency-comment-list-item">
              <span class="basic-info-list__agency-comment-list-item-score basic-info-list__agency-comment-list-item-score--teacher">36万</span>
              <span class="basic-info-list__agency-comment-list-item-hd">学生数</span>
            </li>
          </ul>
        </div>
        <p class="basic-info-list__agency-info">学神IT教育"是国内IT在线教育高端领导品牌，讲师授课方式深入浅出，课程内容全部采用企业实战项目案例的教学方式为主。教学项目均来自于国内外如BAT、facebook等一线知名企业真实项目，能够让处于零基础小白状态的学员毕业获得两到三年以上工作经验，也能够让处于1-3年左右的的职场新人迅速提升！</p>
      </div>
      <div style="height:100px;"></div>
    </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  computed: {
    slicomments () {
      return this.comments.slice(0, 2)
    }
  },
  methods: {
    allComments () {
      this.$router.push({path: '/CourseDetail/comment'})
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
    max-height: 400px;
    font-size: 14px;
    line-height: 25px;
    word-break: break-word;
    color: #777;
    text-align: left;
}
.mod-di-content img {
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
