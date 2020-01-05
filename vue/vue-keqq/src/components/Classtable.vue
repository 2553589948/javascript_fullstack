<template>
  <div class="wrapper">
    <van-dropdown-menu>
      <van-dropdown-item title="综合排序">
        <div class="nav__panel nav__panel-sort">
        <ul class="nav__menu can-scroll nav__panel-sort__menu">
          <li class="nav__menu__item border-top selected">综合排序</li>
          <li class="nav__menu__item border-top">人气排序</li>
          <li class="nav__menu__item border-top">价格最低</li>
          <li class="nav__menu__item border-top">价格最高</li>
        </ul>
      </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="value" @change="valChange" :options="option">
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="item">
        <!-- 遮层3 -->
        <div class="nav__panel nav__panel-filter">
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
            <div class="nav__panel-filter__bottom border-top">
              <span class="filter-reset">清空筛选</span>
              <span class="filter-submit">确定</span>
            </div>
            <!-- <van-button class="confirmBtn" block type="info" @click="onConfirm">确定</van-button> -->
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="courseInfo">
      <div class="custom-indicator" slot="indicator"
      v-for="(item, index) in tabs" :key="index">
        <li class="text">{{item}}</li>
      </div>
      <van-swipe class="courseCont" :loop="false" :show-indicators="false" @change="onChange">
        <van-swipe-item class="courseitem">111111</van-swipe-item>
        <van-swipe-item class="courseitem">222222</van-swipe-item>
        <van-swipe-item class="courseitem">333333</van-swipe-item>
      </van-swipe>
    </div>
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'classtable',
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
      ],
      value: 0,
      option: [
        { text: '已选课程', value: 0 },
        { text: '最新添加', value: '最新添加' },
        { text: '免费课程', value: '免费课程' }
      ],
      tabs: ['详情', '目录', '相关课程']
    }
  },
  methods: {
    onConfirm () {
      this.$refs.item.toggle()
    },
    valChange (val) {
      console.log(val)
    },
    onChange (index) {
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style scoped>
.courseInfo {
  width: 100%;
  text-align: center;
}
.courseInfo .courseCont .courseitem {
  display: block;
  width: 100%;
  overflow: auto;
}
.custom-indicator {
  width: 100%;
}
.text {
  float: left;
  width: 33.3333%;
}
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
/* 遮罩层3 */
.nav__panel-filter__bottom {
  position: absolute;
  /* bottom: 0;
  left: 0; */
  z-index: 2;
  width: 100%;
  line-height: 4.57143rem;
  background: #fff;
}
.filter-reset {
  margin-left: 1.07143rem;
  font-size: 1rem;
  color: #777;
}
.filter-submit {
  position: absolute;
  top: .85714rem;
  right: 1.14286rem;
  border-radius: .42857rem;
  width: 7.14286rem;
  font-size: 1.14286rem;
  line-height: 2.85714rem;
  text-align: center;
  color: #fff;
  background-color: #04acf7;
}
.nav__panel-filter__wrapper {
  position: relative;
  padding-bottom: 50px;
  height: 68vh;
}
/* .nav__panel-filter__wrapper .confirmBtn {
  position: absolute;
  bottom: 0;
  right: 0;
} */
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
