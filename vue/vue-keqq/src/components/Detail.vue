<template>
  <div class="cate-detail-wrapper">
    <header class="d-header">
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
    </header>
    <div class="d-nav" style="top: 52px;">
      <nav class="nav__tab" ref="tabs">
        <div class="nav__tab-item" @click="showSort()"
        :class="{'selected': showDetail0 === true}">
          <p class="nav__tab-item__title">综合排序</p>
        </div>
        <div class="nav__tab-item" @click="showCate()"
        :class="{'selected': showDetail1 === true}">
          <p class="nav__tab-item__title">产品策划</p>
        </div>
        <div class="nav__tab-item" @click="showFilter()"
        :class="{'selected': showDetail2 === true}">
          <p class="nav__tab-item__title">筛选</p>
        </div>
      </nav>
      <!-- 遮层1 -->
      <div class="nav__panel nav__panel-sort" v-show="showDetail0">
        <ul class="nav__menu can-scroll nav__panel-sort__menu">
          <li class="nav__menu__item border-bottom selected">综合排序</li>
          <li class="nav__menu__item border-bottom">人气排序</li>
          <li class="nav__menu__item border-bottom">价格最低</li>
          <li class="nav__menu__item border-bottom">价格最高</li>
        </ul>
      </div>
      <!-- 遮层2 -->
      <div class="nav__panel nav__panel-cate" v-show="showDetail1">
        <ul class="nav__menu can-scroll nav__panel-cate__mt">
          <router-link to="">
            <li class="nav__menu__item"
            v-for="(item, index) in cateItems" :key="index"
            @click="goCate(index)"
            :class="{'selected': activeIdx === index}">
              <img src="" alt="" class="nav__menu__item-icon">
              {{item.cateTitle_short}}
            </li>
          </router-link>
        </ul>
        <ul class="nav__menu can-scroll nav__panel-cate__st"
        v-if="cateItems[activeIdx]">
          <router-link to="">
            <li class="nav__menu__item"
            v-for="(item, index) in cateItems[activeIdx].cateInfo" :key="index"
            @click="goSubCate(index, item.subCateId)"
            :class="{'selected': activeSubIdx === index}">
            {{item.subCateTitle}}</li>
          </router-link>
        </ul>
        <ul class="nav__menu can-scroll nav__panel-cate__tt"
        v-if="cateItems[activeIdx]">
          <router-link to=""
          v-for="(item, index) in cateItems[activeIdx].cateInfo" :key="index" v-show="subCateId == item.subCateId">
            <li class="nav__menu__item" v-for="(list, index) in item.subCates" :key="index">
            {{list.subName}}</li>
          </router-link>
        </ul>
      </div>
      <!-- 遮层3 -->
      <div class="nav__panel nav__panel-filter" v-show="showDetail2">
        <div class="nav__panel-filter__wrapper">
          <div class="nav__panel-filter__content can-scroll">
            <section class="nav__panel-filter__menu border-top"
            v-for="(item, index) in filters" :key="index">
              <h1 class="menu-title">{{item.menuTitle}}</h1>
              <div class="menu-btn" v-for="(list, index) in item.menuItems" :key="index">
                <button>{{list.menuBtn}}</button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <!-- mask -->
      <transition name="fade">
        <div class="nav__mask" v-show="showDetail1" @click="hideMask"></div>
      </transition>
    </div>
    <div class="d-content">
      <div class="content-list">
        <div class="search-result-wrapper">
          <div class="search-result-toast">
            在“
            <span class="search-result-word">产品策划</span>
            ”分类下，找到
            <span class="search-result-num">245</span>
            门课程
          </div>
        </div>
        <ul class="course-list">
          <li class="course-list__item border-bottom">
            <router-link to="">
              <div class="course-card-wrapper">
                <div class="course-card-cover">
                  <img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDcMf3R7Eh1zCwF3krNItceOM39iaWj2ncPUvbFsQ1MznqljEEWTaMWLmCB1nSCdOrQ/356?" alt="">
                </div>
                <div class="course-card-content">
                  <h3 class="course-card-name">技术转产品，技术思维是阻力还是助力？</h3>
                  <div class="course-type-list">
                    <span class="icon-mark">资料</span>
                  </div>
                  <div class="course-card-price">
                    <span class="price" style="color:#5fb41b">免费</span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   cateItems: {
  //     type: Object
  //   }
  // },
  data () {
    return {
      cateItems: [],
      activeIdx: 0,
      activeSubIdx: 0,
      subCateId: String,
      showDetail1: false,
      showDetail0: false,
      showDetail2: false,
      filters: [
        {
          menuTitle: '活动',
          menuItems: [
            {
              menuBtn: '邀好友赢返利',
              menuBtnId: '101'
            },
            {
              menuBtn: '购课返现金',
              menuBtnId: '102'
            }
          ]
        },
        {
          menuTitle: '适用人群',
          menuItems: [
            {
              menuBtn: '零基础',
              menuBtnId: '201'
            },
            {
              menuBtn: '1-3年工作经验',
              menuBtnId: '202'
            },
            {
              menuBtn: '5年以上工作经验',
              menuBtnId: '203'
            }
          ]
        },
        {
          menuTitle: '授课内容',
          menuItems: [
            {
              menuBtn: '交互设计',
              menuBtnId: '301'
            },
            {
              menuBtn: '数据分析',
              menuBtnId: '302'
            },
            {
              menuBtn: '移动产品设计',
              menuBtnId: '303'
            },
            {
              menuBtn: '竞品分析',
              menuBtnId: '304'
            },
            {
              menuBtn: '实用工具',
              menuBtnId: '305'
            },
            {
              menuBtn: '综合体系课',
              menuBtnId: '306'
            },
            {
              menuBtn: '产品思维',
              menuBtnId: '307'
            },
            {
              menuBtn: '互联网+',
              menuBtnId: '308'
            }
          ]
        },
        {
          menuTitle: '课程类型',
          menuItems: [
            {
              menuBtn: '随到随学',
              menuBtnId: '401'
            },
            {
              menuBtn: '正在直播',
              menuBtnId: '402'
            },
            {
              menuBtn: '系列课',
              menuBtnId: '403'
            }
          ]
        },
        {
          menuTitle: '价格区间',
          menuItems: [
            {
              menuBtn: '免费',
              menuBtnId: '501'
            },
            {
              menuBtn: '￥50以下',
              menuBtnId: '502'
            },
            {
              menuBtn: '￥50-100',
              menuBtnId: '503'
            },
            {
              menuBtn: '￥100-500',
              menuBtnId: '504'
            },
            {
              menuBtn: '￥500-1000',
              menuBtnId: '505'
            },
            {
              menuBtn: '￥1000以上',
              menuBtnId: '506'
            }
          ]
        },
        {
          menuTitle: '课程内容包含(可多选)',
          menuItems: [
            {
              menuBtn: '直播授课',
              menuBtnId: '601'
            },
            {
              menuBtn: '录播视频',
              menuBtnId: '602'
            },
            {
              menuBtn: '课程资料',
              menuBtnId: '603'
            },
            {
              menuBtn: '习题测验',
              menuBtnId: '604'
            },
            {
              menuBtn: '试听',
              menuBtnId: '605'
            }
          ]
        }
      ]
    }
  },
  methods: {
    goCate (idx) {
      this.activeIdx = idx
    },
    goSubCate (idx, subCateId) {
      this.activeSubIdx = idx
      this.subCateId = subCateId
    },
    showSort () {
      // let el = this.$refs.tabs
      // console.log(el)
      this.showDetail0 = !this.showDetail0
    },
    showFilter () {
      this.showDetail2 = !this.showDetail2
    },
    showCate () {
      this.showDetail1 = !this.showDetail1
    },
    hideMask () {
      this.showDetail1 = false
    }
  },
  // computed: {
  //   showDetail () {
  //     return
  //   }
  // },
  created () {
    this.$http.get('http://localhost:8080/static/categoryItem.json')
      .then(res => {
        // console.log(res)
        if (res.data.errno === 0) {
          this.cateItems = res.data.data
        }
      })
    console.log(this.$route.query.targetId)
  }
}
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}
body, html {
  height: 100%;
  background: #f8f8f8;
}
.d-header {
  position: fixed!important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10010;
  padding: 10px 0;
  height: 52px;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  border-bottom: 1px solid #e1e1e1;
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
.d-nav {
  z-index: 1100;
  position: fixed;
  top: 52px;
  left: 0;
  width: 100%;
}
.nav__tab {
  display: flex;
  width: 100%;
  font-size: 14px;
  background-color: #fff;
}
.nav__tab-item {
  -webkit-box-flex: 1;
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 125px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  box-shadow: 0 0 1px #ededed;
}
.nav__tab-item__title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}
.nav__tab-item.selected {
  color: #23b8ff;
}
.d-content {
  width: 100%;
  min-height: 100%;
  padding-top: 92px;
}
.search-result-wrapper {
  background: #efeff4;
  padding: 0 10px;
  position: relative;
}
.search-result-toast {
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: #808081;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search-result-toast .search-result-word {
    color: #23b8ff;
}
.course-list {
  position: relative;
  transition: opacity .3s ease;
  background: #fff;
}
/* 上下border */
.border-bottom:after {
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  border-top: 1px solid #e1e1e1;
  content: " ";
  transform: scaleY(.5);
}
.border-bottom:after {
  bottom: 0;
}
.border-top:before {
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  border-top: 1px solid #e1e1e1;
  content: " ";
  transform: scaleY(.5);
}
.border-top:before {
  top: 0;
}
.course-list__item .course-card-wrapper {
  padding: 15px;
  clear: both;
  overflow: hidden;
  min-height: 84px;
  display: block;
}
.course-card-wrapper .course-card-cover {
  width: 140px;
  height: 80px;
  float: left;
  position: relative;
}
.course-card-wrapper .course-card-cover img {
  width: 100%;
  border: 0;
  vertical-align: middle;
}
.course-card-wrapper .course-card-content {
  margin-left: 150px;
}
.course-card-wrapper .course-card-content .course-card-name {
  font-size: 17px;
  color: #000;
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-weight: 400;
}
.course-card-wrapper .course-type-list {
  margin-top: 2px;
}
.course-card-wrapper .course-card-content .course-type-list .icon-mark {
  margin-top: 6px;
  margin-left: 0;
  margin-right: 6px;
  display: inline-block;
  position: relative;
  top: -2px;
  padding: 0 6px;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  color: #23b8ff;
}
.icon-mark:before {
  content: "";
  border-radius: .28571rem;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  transform-origin: left top;
  transform: scale(.5);
  border: .07143rem solid #23b8ff;
}
.course-card-wrapper .course-card-content .course-card-price {
  line-height: 17px;
  margin-top: 4px;
}
.course-card-wrapper .course-card-content .course-card-price .price {
  line-height: 17px;
  font-size: 17px;
}
/* 阴影 */
.nav__mask {
  display: block;
  position: fixed;
  top: 92px;
  bottom: -3.57143rem;
  z-index: -1;
  width: 100%;
  background-color: rgba(0,0,0,.3);
  backdrop-filter: blur(10px);
  opacity: 1;
}
.nav__mask.fade-enter-active, .nav__mask.fade-leave-active {
  transition: all 0.5s;
}
.nav__mask.fade-enter, .nav__mask.fade-leave-active {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
}
/* 遮罩层common */
.nav__panel {
  position: absolute;
  width: 100%;
  left: 0;
  top: 40px;
  background: #fff;
  overflow-y: auto;
  /* transform: translate3d(0, 100%, 0) */
}
.nav__panel.fold-enter-active, .nav__panel.fold-leave-active {
  transition: all 0.1s linear;
}
.nav__panel.fold-enter, .nav__panel.fold-leave-active {
  transform: translate3d(0, 0, 0);
}
/* 遮罩层1 */
.nav__panel-sort .nav__menu__item {
  overflow: hidden;
  position: relative;
  padding-left: 12px;
  height: 47px;
  max-height: 47px;
  font-size: 14px;
  line-height: 47px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  background-color: #fff;
}
.nav__panel-sort .nav__menu__item.selected {
  border-left: 3px solid #23b8ff;
  color: #23b8ff;
  background-color: #f8f8f8;
}
/* 遮罩层2 */
.nav__panel-cate {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  height: 66vh;
}
.nav__menu {
  overflow-y: auto;
  width: 100%;
}
.nav__menu__item.selected {
  color: #23b8ff;
}
.nav__panel-cate__mt {
  width: 6.42857rem;
  background: #f2f2f4;
}
.nav__panel-cate .nav__menu__item {
  overflow: hidden;
  position: relative;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  background-color: #fff;
  padding-left: 1.14286rem;
  height: 3.57143rem;
  max-height: 3.57143rem;
  line-height: 3.57143rem;
}
.nav__panel-cate__mt .nav__menu__item {
  padding-left: 3rem;
  background: #f2f2f2;
}
.nav__panel-cate .nav__menu__item-icon {
  display: block;
  position: absolute;
  top: 50%;
  left: 1.14286rem;
  margin-top: -.71429rem;
  width: 1.14286rem;
  height: 1.14286rem;
  border: 0;
  /* vertical-align: middle; */
  max-width: 100%;
}
.nav__panel-cate__st {
  width: 7.85714rem;
  background: #f8f8f9;
}
.nav__panel-cate__st .nav__menu__item {
  background: #f8f8f9;
}
.nav__panel-cate__tt {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 100%;
  background: #fff;
}
.nav__panel-cate__tt .nav__menu__item {
  border: 0;
  background: #fff;
}
/* 遮罩层3 */
.nav__panel-filter__wrapper {
  position: relative;
  padding-bottom: 50px;
  height: 68vh;
}
.nav .nav__panel-filter__content {
  overflow-y: scroll;
  height: 100%;
}
.nav__panel-filter__menu {
  overflow: hidden;
  position: relative;
  padding: 0 10px 20px;
}
.nav__panel-filter__menu .menu-title {
  margin-top: .71429rem;
  padding-left: .35714rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  color: #777;
}
.nav__panel-filter__menu .menu-btn {
  float: left;
  position: relative;
  margin-top: .71429rem;
  box-sizing: border-box;
  padding: 0 .35714rem;
  width: 33.333%;
  height: 2.28571rem;
}
.nav__panel-filter__menu .menu-btn button {
  border-radius: 1.28571rem;
  border: .07143rem solid #bbb;
  padding: 0 .14286rem;
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: #000;
  background: #fff;
  line-height: 1.14286rem;
  height: 2.28571rem;
  overflow: hidden;
}
</style>
