<template>
  <div class="home-wrapper">
    <div class="header">
      <div class="avatar">
        <img src="../assets/images/keqqLogo.png" alt="">
      </div>
      <div class="search-cancel" style="display: none">取消</div>
      <form action="" class="header-search">
        <div class="search-tips">
          <i class="icon-font search-icon"></i>
          <span class="search-input-text">搜索老师、机构、课程</span>
        </div>
        <input type="search" class="search-input">
        <div class="search-reset">
          <div class="icon-close"></div>
        </div>
      </form>
    </div>
    <div class="home-content-wrapper">
      <div class="content-wrapper">
        <div class="course-banner">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in banner" :key="item.id">
              <img :src="item.src">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="course-spec">
          <div class="course-spec-wrapper">
            <div class="course-spec-left">
              <img src="../assets/images/course-spec-1.jpg" alt="">
            </div>
            <div class="course-spec-line"></div>
            <div class="course-spec-right">
              <img src="../assets/images/course-spec-2.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="course-category tab">
          <div class="tab-item" v-for="(item, index) in coursecategory" :key="index" @click="showDetail(index, item.categoryId)"
          :class="{'active': activeIndex === index}">
            <span>{{item.categoryName}}</span>
          </div>
        </div>
        <div class="course-category-content">
          <router-view/>
        </div>
        <div class="all-course"></div>
        <div class="hot-train-course topic-seo"></div>
      </div>
    </div>
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'index',
      activeIndex: 0,
      banner: [
        {'id': 1, 'src': 'https://p.qpic.cn/qqconadmin/0/86b4a9b7a8194af1b16acfacdda27f8d/0'},
        {'id': 2, 'src': 'https://p.qpic.cn/qqconadmin/0/6c57409ddab7465ba266fd19c952cce0/0'},
        {'id': 3, 'src': 'https://p.qpic.cn/qqconadmin/0/5c191dfd81874f2980e87a52162a34c4/0'},
        {'id': 4, 'src': 'https://p.qpic.cn/qqconadmin/0/b0423c3708db4774ba301c7dc08b813a/0'},
        {'id': 5, 'src': 'https://p.qpic.cn/qqconadmin/0/a1a23c0f8c5d4c349fc4ba04ded426bb/0'},
        {'id': 6, 'src': 'https://p.qpic.cn/qqconadmin/0/3cf6da2d76ee4f10a9908840a31e6e99/0'},
        {'id': 7, 'src': 'https://p.qpic.cn/qqconadmin/0/faaa106254414715ba47d62f2d2fba8b/0'},
        {'id': 8, 'src': 'https://p.qpic.cn/qqconadmin/0/64b72ff9ad9145f5bd29ab45aef713aa/0'}
      ],
      coursecategory: [
        {
          id: 1001,
          categoryId: 'specSelected',
          categoryName: '精选推荐'
        },
        {
          id: 2001,
          categoryId: 'programing',
          categoryName: '编程语言'
        },
        {
          id: 3001,
          categoryId: 'grapDesign',
          categoryName: '平面设计'
        },
        {
          id: 4001,
          categoryId: 'profession',
          categoryName: '职业技能'
        },
        {
          id: 5001,
          categoryId: 'high',
          categoryName: '高中'
        },
        {
          id: 6001,
          categoryId: 'english',
          categoryName: '实用英语'
        },
        {
          id: 7001,
          categoryId: 'art',
          categoryName: '文艺修养'
        }
      ]
    }
  },
  methods: {
    showDetail (index, curid) {
      console.log(index)
      console.log(curid)
      this.$router.push({path: '/', query: {id: index}})
      this.activeIndex = index
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style lang="css" scoped>
.home-wrapper {
  width: 100%;
  min-height: 100%;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10020;
  padding: 10px 0;
  background: #fff;
}
.avatar {
  display: inline-block;
  position: absolute;
  top: 12px;
  width: 45px;
  height: 40px;
  text-align: center;
}
.avatar img {
  display: inline-block;
  width: 26px;
  height: 26px;
  background-size: 26px 26px;
}
.header-search {
  position: relative;
  margin: 0 12px 0 47px;
  border-radius: 16px;
  height: 32px;
  line-height: 32px;
  background: #f2f2f6;
}
.search-tips {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input {
  display: block;
  position: relative;
  border: 0;
  border-radius: 0;
  padding-right: 20px;
  padding-left: 2px;
  width: 95%;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  background: transparent;
  outline: 0;
  pointer-events: auto;
}
.home-content-wrapper {
  position: relative;
  top: 52px;
  margin-bottom: 55px;
}
.course-banner {
  height: 143px;
  width: 100%;
}
.course-banner img {
  display: inline-block;
  height: 100%;
  width: 100%;
}
.course-spec {
  width: 100%;
  height: 80px;
  margin-bottom: 7px;
  position: relative;
}
.course-spec:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 2.5%;
  display: block;
  height: 1px;
  width: 95%;
  background-color: #c8c7cc;
  opacity: .5;
  transform: scaleY(0.5);
}
.course-spec-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
}
.course-spec-left {
  display: inline-block;
  position: absolute;
  top: 8px;
  left: 12px;
  width: 64px;
  height: 64px;
}
.course-spec-left img, .course-spec-right img {
  width: 100%;
  height: 100%;
}
.course-spec-line {
  position: absolute;
  left: 93px;
  top: 22.5px;
  height: 36px;
  width: 1px;
  background-color: #c8c7cc;
  opacity: .5;
  transform: scaleX(0.5);
}
.course-spec-right {
  position: absolute;
  top: 8px;
  right: 12px;
  width: 252px;
  height: 64px;
}
.course-category {
  width: 100%;
  margin-bottom: 13px;
  white-space: nowrap;
  overflow-x: auto;
  height: 46px;
  display: flex;
}
.tab-item {
  padding: 0 15px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
}
.tab-item.active {
  font-size: 24px;
  font-weight: 500;
}
::-webkit-scrollbar {     /* 取消横向滚动条 */
  width: 0;
  height: 0;
  color: transparent;
}
</style>
