<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">课程表</div>
      <div class="allSelect" v-show="!editCancel" @click="selectAll">{{selectedHtml}}({{isCheckedNumber}})</div>
      <div class="del" @click="del" v-show="!editCancel" style="background: red; padding: 0 20px;">删除({{isCheckedNumber}})</div>
      <div class="right" v-if="listData.length" @click="edit">{{editHtml}}</div>
      <div class="right" v-else @click="toAdd">去添加</div>
    </div>
    <ul class="course-list" v-if="listData.length > 0">
      <li class="course list-view__item" v-for="(item, index) in listData" :key="index" @click="toCourseDetail(item.courseId)">
        <div class="course__cover">
          <div class="course__cover-img" style="background-image:url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp);"></div>
          <div class="course__cover-mask"></div>
        </div>
        <div class="course__name-box">
          <div v-show="!editCancel" @click.stop="changeColor(index, item.courseId)" class="icon" :class="[Listids[index] ? 'active' : '']"></div>
          <h3 class="course__name">{{item.courseTitle}}</h3>
        </div>
        <p class="course__msg">
          <i class="icon-font i-course-record"></i>
          <span class="course__sub-name">继续学习</span>
        </p>
      </li>
    </ul>
    <div class="noListData" v-else>空空如也~快去添加吧</div>
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
import { Dialog } from 'vant'
export default {
  data () {
    return {
      current: 'classtable',
      listData: [],
      Listids: [],
      editCancel: true,
      selected: false
    }
  },
  mounted () {
    if (sessionStorage.getItem('userInfo') === null) {
      this.$router.replace({path: '/login'})
    } else {
      this.getCourseList()
    }
  },
  methods: {
    toAdd () {
      this.$router.push({path: '/category'})
    },
    getCourseList () {
      let userId = JSON.parse(sessionStorage.getItem('userInfo')).id
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/getCourseList',
        data: {
          useId: userId
        }
      }).then((res) => {
        console.log(res)
        this.listData = res.data.listData
      })
    },
    // 去往课程详情页
    toCourseDetail (courseId) {
      if (this.editCancel) {
        this.$router.push({path: '/courseDetail', query: {courseId: courseId}})
      }
    },
    changeColor (index, courseId) {
      if (this.Listids[index]) {
        this.$set(this.Listids, index, false)
      } else {
        this.$set(this.Listids, index, courseId)
      }
    },
    edit () {
      this.editCancel = !this.editCancel
      if (this.editCancel) { // bug1
        this.selected = false
        this.Listids = []
      }
    },
    selectAll () {
      // 先清空选择
      this.Listids = []
      if (this.selected) {
        this.selected = false
      } else {
        this.selected = true
        // 全部选择
        for (let i = 0; i < this.listData.length; i++) {
          const element = this.listData[i]
          this.Listids.push(element.courseId)
        }
      }
    },
    del () {
      // 去除数组中空的false
      let coursesid = []
      for (let i = 0; i < this.Listids.length; i++) {
        const element = this.Listids[i]
        if (element) {
          coursesid.push(element)
        }
      }
      if (coursesid.length === 0) { // bug3 因为Listids中含有false,用此长度作为判断条件有bug
        this.$toast('请选择要删除的课程')
      } else {
        Dialog.confirm({
          title: '温馨提示',
          message: '确定要删除课程吗？'
        }).then(() => {
          let courseId = coursesid.join("','")
          console.log(`'${courseId}'`) // '1001-1001','1001-1002'格式这样mysql才能识别, 要不然就是(520,521,522)
          let userId = JSON.parse(sessionStorage.getItem('userInfo')).id
          this.$http({
            method: 'post',
            url: 'http://localhost:3000/users/delCourse',
            data: {
              useId: userId,
              courseId: `'${courseId}'`
            }
          }).then((res) => {
            // console.log(res)
            this.getCourseList()
            this.$toast(res.data.data)
            this.editCancel = true
            this.Listids = [] // bug2
          })
        }).catch(() => {
          // on cancel
        })
      }
    }
  },
  computed: {
    editHtml () {
      return this.editCancel ? '编辑' : '取消'
    },
    selectedHtml () {
      return this.selected ? '取消全选' : '全选'
    },
    isCheckedNumber () {
      let number = 0
      for (let i = 0; i < this.Listids.length; i++) {
        if (this.Listids[i]) {
          number++
        }
      }
      if (number === this.listData.length && number !== 0) {
        this.selected = true
      } else {
        this.selected = false
      }
      return number
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style scoped>
.wrapper {
  padding-bottom: 60px;
  min-height: 83vh;
  background-color: #532f2f;
  position: relative;
}
.noListData {
  position: absolute;
  color: #e9e9e9;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
}
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
