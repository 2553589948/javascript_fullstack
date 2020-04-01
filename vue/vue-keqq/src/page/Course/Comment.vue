<template>
  <div class="comment-wrapper">
    <div class="basic-info-list__item basic-info-list__item--comment">
      <p class="basic-info-list__item-title">
        <span class="basic-info-list__item-title-word comment-word">学员评论</span>
        <span class="basic-info-list__item-title-static">({{comments.length}})</span>
        <em class="basic-info-list__sort">
          <span class="timeSort">按时间排</span>
          <span class="supportSort">按热度排</span>
        </em>
      </p>
      <ul class="mod-comments-list__list">
          <li class="comments-list__item" v-for="(item, index) in comments" :key="index">
            <div class="comments-list-item__info">
              <div class="comments-list-item__cover">
                <img class="comments-list-item__img" src="http://thirdwx.qlogo.cn/mmopen/vi_32/z6icVEE3NvYHfuJTcA3XibibrWNhRdWgWE231vE2RYXVMayvWibpsiaYcHFRGaSJRkB4MELxeXmuibvAj1TSu01OLIhw/132">
              </div>
              <div class="comments-list-item__name">{{item.nickname}}</div>
              <em class="basic-info-list__support" @click="support(item.cmeid, item.supportCount)"><span class="supportCount">{{item.supportCount}}</span><i class="cate-icon" :class="isSupport ? 'active' : ''">&#xe600;</i></em>
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
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  props: {
    comments: {
      type: Array
    }
  },
  data () {
    return {
      isSupport: false
    }
  },
  mounted () {
    this.getSupportInfo()
  },
  methods: {
    getSupportInfo () {
      let courseId = this.$route.query.courseId
      let userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/getSupportInfo',
        data: {
          useId: userId,
          courseId: courseId
        }
      }).then(res => {
        console.log(res)
        // this.isSupport = res.data.data
      })
    },
    support (cmeid, supportCount) {
      if (sessionStorage.getItem('userInfo') === null) {
        Dialog.confirm({
          title: '提示',
          message: '你尚未登录！是否去登录？'
        }).then(() => {
          this.$router.push({path: '/login'})
        }).catch(() => {
          // on cancel
        })
      } else {
        this.isSupport = !this.isSupport
        let courseId = this.$route.query.courseId
        let userId = JSON.parse(sessionStorage.getItem('userInfo')).id
        if (this.isSupport) {
          supportCount++
        } else {
          supportCount--
        }
        this.$http({
          method: 'post',
          url: 'http://localhost:3000/users/supportAction',
          data: {
            useId: userId,
            courseId: courseId,
            cmeid: cmeid,
            supportCount: supportCount
          }
        }).then(res => {
          console.log(res)
        })
      }
    }
  }
}
</script>

<style scoped>
.basic-info-list__sort {
  float: right;
  padding-right: 15px;
  font-size: 16px;
  font-style: normal;
  color: #999;
}
.timeSort {
  border-right: 1px solid #999;
  padding-right: 5px;
}
.basic-info-list__support {
  float: right;
  line-height: 45px;
  font-size: 16px;
  font-style: normal;
  color: #999;
}
.cate-icon {
  font-family: "cateicon";
  font-size: 22px;
}
.cate-icon.active {
  color: #23b8ff;
}
.comment-wrapper {
  padding-top: 69.2%;
  padding-bottom: 60px;
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
    border-bottom: 1px solid #eee;
}
.mod-comments-list__list .comments-list__item:last-child {
  border-bottom: none;
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
    width: 100%;
    height: 100%;
    border-radius: 50%;
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
</style>
